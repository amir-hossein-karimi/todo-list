import { FC } from "react";

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

interface TodoItemProps extends Omit<AccordionProps, "children"> {
  todo: todoType;
}

const TodoItem: FC<TodoItemProps> = ({ todo, ...props }) => {
  const classes = useStyles();

  return (
    <Accordion {...props}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Box className={classes.summary}>
          <Typography>{todo.title}</Typography>

          <Box className={classes.actionButtons}>
            <Button variant="text">
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
  );
};

export default TodoItem;
