import { useCreateUser } from "@/hooks/user";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { User } from "@prisma/client";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");
  const { mutateAsync: createUser } = useCreateUser();
  const userNameHandler = (userName: string) => {
    setName((prev) => userName);
  };
  const passwordHandler = (passWord: string) => {
    setPassWord((prev) => passWord);
  };
  const signUpHandler = async () => {
    const user: User = {
      id: "",
      userName: name,
      passWord: passWord,
    };
    await createUser({ user });
  };
  return (
    <Stack
      m={"auto"}
      height={"100%"}
      width={"90%"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px solid black"}
      sx={{ backgroundColor: "white" }}
    >
      <Stack
        width={"35rem"}
        height={"40rem"}
        border={"1px solid gray"}
        borderRadius={"10px"}
        m={"7rem 0"}
        alignItems={"center"}
      >
        <Typography variant="h2" color={"black"} mt={"2rem"}>
          Sign up
        </Typography>
        <Stack width={"20rem"}>
          <Typography color={"black"} mt={"2rem"}>
            User Name:
          </Typography>
          <TextField
            onChange={(e) => userNameHandler(e.target.value)}
          ></TextField>
          <Typography color={"black"} mt={"2rem"}>
            PassWord:
          </Typography>
          <TextField
            onChange={(e) => passwordHandler(e.target.value)}
          ></TextField>
        </Stack>
        <Stack width={"20rem"} mt={"5rem"}>
          <Button
            variant="contained"
            sx={{ height: "3rem" }}
            onClick={() => signUpHandler()}
          >
            Sign up
          </Button>
          <Button sx={{ height: "2rem", mt: "1rem", width: "7rem" }}>
            Sign in
          </Button>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};

export default SignUp;
