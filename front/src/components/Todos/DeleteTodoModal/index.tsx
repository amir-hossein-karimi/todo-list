import { Dispatch, FC, SetStateAction, useState } from "react";

import { Box, Button, Dialog, Typography } from "@mui/material";
import useStyles from "./useStyles";
import { LoadingButton } from "@mui/lab";
import { deleteTodo as deleteTodoApi } from "../../../apis/todos";
import { todoType } from "../../../types";
import { toast } from "react-toastify";

interface deleteTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
  todoId: string;
  todos: todoType[];
  setTodos: Dispatch<SetStateAction<todoType[]>>;
}

const DeleteTodoModal: FC<deleteTodoDialogProps> = ({
  open,
  toggleDialog,
  todoId,
  setTodos,
  todos,
}) => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);

  const deleteTodo = () => {
    setLoading(true);

    deleteTodoApi(todoId)
      .then(() => {
        const newData = [...todos];

        const todoIndex = newData.findIndex((item) => item._id === todoId);

        newData.splice(todoIndex, 1);

        setTodos(newData);

        toggleDialog();
        toast.success("todo deleted successfully");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Box className={classes.container}>
        <Typography>delete?</Typography>

        <Box className={classes.buttonsContainer}>
          <Button onClick={toggleDialog}>no</Button>

          <LoadingButton
            color="error"
            variant="contained"
            loading={loading}
            onClick={deleteTodo}
          >
            yes
          </LoadingButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DeleteTodoModal;
