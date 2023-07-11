import { FC } from "react";

import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./useStyles";

interface addTodoProps {
  hasTodo?: boolean;
}

const AddTodo: FC<addTodoProps> = ({ hasTodo = false }) => {
  const classes = useStyles({ hasTodo });

  return (
    <Box className={classes.container}>
      <AddIcon />
      <Typography>add todo</Typography>
    </Box>
  );
};

export default AddTodo;
