import { FC } from "react";

import { Box, Dialog } from "@mui/material";
import useStyles from "./useStyles";

interface deleteTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
}

const DeleteTodoModal: FC<deleteTodoDialogProps> = ({ open, toggleDialog }) => {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Box className={classes.container}>delete</Box>
    </Dialog>
  );
};

export default DeleteTodoModal;
