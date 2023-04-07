import { BuildLabelCell } from "@/comp/buildLabelCell";
import { useGetLabelByUser, useUpdateLabel } from "@/hooks/label";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const Label = () => {
  const [user, setUser] = useState("");
  const [label, setLabel] = useState<string[]>([]);
  const [inputLabel, setInputLabel] = useState("");
  const router = useRouter();
  const { refetch } = useGetLabelByUser(user);
  const { mutateAsync: updateLabel } = useUpdateLabel();
  const [update, setUpdate] = useState<boolean[]>([]);
  const fetchDate = async () => {
    const data = await refetch();
    if (data) {
      setLabel(data.data.label);
    }
  };
  useEffect(() => {
    const userData = localStorage.getItem("user");
    setUser(userData);
  }, []);
  useEffect(() => {
    if (user !== "") {
      fetchDate();
    }
  }, [user]);
  useEffect(() => {
    if (user !== "") {
      updateLabel({
        userName: user,
        data: { userName: user, label: label },
      });
      setUpdate(new Array(label.length).fill(false));
    }
  }, [label]);
  const signOutHandler = () => {
    router.push("/");
  };
  const inputLabelHandler = (tab: string) => {
    setInputLabel((prev) => tab);
  };
  const addLabelHandler = async () => {
    if (inputLabel !== "") {
      setLabel([...label, inputLabel]);
      setInputLabel("");
    }
  };

  const deleteButtonHandler = (index: number) => {
    let tempLabel = label;
    tempLabel.splice(index, 1);
    setLabel([...tempLabel]);
  };
  const updateButtonHandler = (index: number) => {
    let tempUpdate = update;
    tempUpdate[index] = !tempUpdate[index];
    setUpdate([...tempUpdate]);
  };
  const cancelButtonHandler = (index: number) => {
    let tempUpdate = update;
    tempUpdate[index] = !tempUpdate[index];
    setUpdate([...tempUpdate]);
  };
  const saveButtonHandler = (index: number, newLabel: string) => {
    if (newLabel !== "") {
      let tempLabel = label;
      tempLabel[index] = newLabel;
      setLabel([...tempLabel]);
    }
  };
  return user ? (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "white", color: "black" }}
    >
      <Stack
        direction={"row"}
        borderBottom={"1px solid gray"}
        height={"4rem"}
        alignItems={"center"}
        width={"100%"}
      >
        <Typography variant="h4" ml={"1rem"}>
          Welcome {user}
        </Typography>
        <Stack direction={"row"} ml="auto" mr={"1rem"}>
          <Button onClick={() => signOutHandler()}>Sign out</Button>
        </Stack>
      </Stack>
      <Stack
        maxWidth={"50rem"}
        justifyContent={"center"}
        pt={"3rem"}
        alignItems={"center"}
        spacing={"2rem"}
        mb={"8rem"}
      >
        <Typography>
          On this page, you can manage your favorite product labels and product
          recommendation tags by adding, modifying, or deleting them as needed.
        </Typography>
        <Stack direction={"row"} width={"70%"} justifyContent={"space-between"}>
          <TextField
            sx={{ width: "100%" }}
            helperText={"E.g. : phone"}
            value={inputLabel}
            onChange={(e) => {
              inputLabelHandler(e.target.value);
            }}
          ></TextField>
          <Button
            variant="outlined"
            sx={{ width: "10rem", mb: "1.3rem" }}
            onClick={() => addLabelHandler()}
          >
            Add Label
          </Button>
        </Stack>
        <Stack minHeight={"20rem"} border={"1px solid gray"} width={"70%"}>
          <Typography ml={"1rem"} mt={"0.5rem"}>
            your current label:
          </Typography>
          <Stack ml={"2rem"}>
            {label.map((tab, id) => {
              return (
                <Stack key={id}>
                  <BuildLabelCell
                    tab={tab}
                    id={id}
                    updateState={update[id]}
                    deleteButtonHandler={deleteButtonHandler}
                    updateButtonHandler={updateButtonHandler}
                    cancelButtonHandler={cancelButtonHandler}
                    saveButtonHandler={saveButtonHandler}
                  />
                  <Divider sx={{ ml: "1rem" }} />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <Stack
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2">Please log in.</Typography>
    </Stack>
  );
};

export default Label;
