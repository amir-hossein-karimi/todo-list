import { Dispatch, FC, MouseEvent, SetStateAction, useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { todoType } from "../../../types";
import useStyles from "./useStyles";
import DeleteTodoModal from "../DeleteTodoModal";

interface TodoItemProps extends Omit<AccordionProps, "children"> {
  todo: todoType;
  todos: todoType[];
  setTodos: Dispatch<SetStateAction<todoType[]>>;
}

const TodoItem: FC<TodoItemProps> = ({ todo, todos, setTodos, ...props }) => {
  const classes = useStyles();

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const openDeleteModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setDeleteModal(true);
  };

  return (
    <>
      <Accordion {...props}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box className={classes.summary}>
            <Typography>{todo.title}</Typography>

            <Box className={classes.actionButtons}>
              <Button variant="text" onClick={openDeleteModal}>
                <DeleteIcon color={"error"} />
              </Button>

              <Button variant="text">
                <EditIcon color={"secondary"} />
              </Button>
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>{todo.description}</Typography>
        </AccordionDetails>
      </Accordion>

      <DeleteTodoModal
        open={deleteModal}
        toggleDialog={() => setDeleteModal(false)}
        todoId={todo._id}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};

export default TodoItem;
