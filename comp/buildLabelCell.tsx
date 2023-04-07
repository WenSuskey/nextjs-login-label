import { Typography, Button, Collapse, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useRef } from "react";

export const BuildLabelCell = ({
  tab,
  id,
  updateState,
  deleteButtonHandler,
  updateButtonHandler,
  cancelButtonHandler,
  saveButtonHandler,
}: {
  tab: string;
  id: number;
  updateState: boolean;
  deleteButtonHandler: (index: number) => void;
  updateButtonHandler: (index: number) => void;
  cancelButtonHandler: (index: number) => void;
  saveButtonHandler: (index: number, newLabel: string) => void;
}) => {
  const textRef = useRef(null);
  return (
    <Stack>
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        p={"0.5rem 1rem"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6">{tab}</Typography>
        <Stack direction={"row"} mr={"1rem"}>
          <Button
            sx={{ color: "black" }}
            onClick={() => updateButtonHandler(id)}
          >
            update
          </Button>
          <Button
            sx={{ color: "red" }}
            onClick={() => {
              deleteButtonHandler(id);
            }}
          >
            delete
          </Button>
        </Stack>
      </Stack>
      <Collapse in={updateState}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          mb={"1rem"}
          mt={"1rem"}
        >
          <TextField
            inputRef={textRef}
            label={`Modify ${tab} label:`}
            sx={{ width: "14rem" }}
            helperText={"New Label Can Not Be Empty"}
          ></TextField>
          <Stack direction={"row"} mr={"1rem"}>
            <Button
              onClick={() => saveButtonHandler(id, textRef.current.value)}
              disabled={!textRef}
            >
              Save
            </Button>
            <Button
              sx={{ color: "#ee2400" }}
              onClick={() => {
                cancelButtonHandler(id);
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Collapse>
    </Stack>
  );
};
