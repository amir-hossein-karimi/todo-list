import { Box, Dialog } from "@mui/material";
import { FC } from "react";
import useStyles from "./useStyles";

interface addTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
}

const AddTodoDialog: FC<addTodoDialogProps> = ({ open, toggleDialog }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Box className={classes.container}>test</Box>
    </Dialog>
  );
};

export default AddTodoDialog;
