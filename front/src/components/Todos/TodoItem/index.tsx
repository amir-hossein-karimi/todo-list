import { FC } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Typography,
} from "@mui/material";

import { todoType } from "../../../types";

interface TodoItemProps extends Omit<AccordionProps, "children"> {
  todo: todoType;
}

const TodoItem: FC<TodoItemProps> = ({ todo, ...props }) => {
  return (
    <Accordion {...props}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{todo.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{todo.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default TodoItem;
