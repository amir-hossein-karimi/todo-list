import { FC, useState } from "react";

import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./useStyles";
import AddTodoDialog from "./AddTodoDialog";

interface addTodoProps {
  hasTodo?: boolean;
}

const AddTodo: FC<addTodoProps> = ({ hasTodo = false }) => {
  const classes = useStyles({ hasTodo });

  const [addTodoDialog, setAddTodoDialog] = useState<boolean>(false);

  const toggleDialog =
    (state = false) =>
    () => {
      setAddTodoDialog(state);
    };

  return (
    <>
      <Box className={classes.container} onClick={toggleDialog(true)}>
        <AddIcon />
        <Typography>add todo</Typography>
      </Box>
      <AddTodoDialog open={addTodoDialog} toggleDialog={toggleDialog(false)} />
    </>
  );
};

export default AddTodo;
