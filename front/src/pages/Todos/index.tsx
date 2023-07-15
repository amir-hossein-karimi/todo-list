import { useEffect, useState } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

import useStyles from "./useStyles";
import TodoItem from "../../components/Todos/TodoItem";
import { useParams } from "react-router-dom";
import { todoType } from "../../types";
import { LoadingButton } from "@mui/lab";
import { getAllTodos } from "../../apis/todos";
import AddTodo from "../../components/Todos/AddTodo";

const Todos = () => {
  const classes = useStyles();

  const { categoryId } = useParams();

  const [expanded, setExpanded] = useState<string>("");

  const [todos, setTodos] = useState<todoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : "");
    };

  const getTodos = (hasLoading = false) => {
    if (hasLoading) setLoading(true);
    if (categoryId)
      getAllTodos(categoryId)
        .then((res) => setTodos(res.data))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
  };

  useEffect(getTodos, [categoryId]);

  return (
    <Box className={classes.container}>
      <Typography variant="h1">T</Typography>

      <Box className={classes.content}>
        {loading ? (
          <Box className={classes.centerBox}>
            <CircularProgress color="secondary" />
          </Box>
        ) : error ? (
          <Box className={classes.centerBox}>
            <Box className={classes.errorContainer}>
              <Typography color="red">has error</Typography>

              <LoadingButton
                color="primary"
                variant="contained"
                loading={loading}
                onClick={() => {
                  setError(false);
                  getTodos(true);
                }}
              >
                try again
              </LoadingButton>
            </Box>
          </Box>
        ) : (
          <Box>
            {todos.map((todo) => (
              <TodoItem
                todo={todo}
                expanded={expanded === todo._id}
                onChange={handleChange(todo._id)}
              />
            ))}
            <AddTodo hasTodo={todos.length > 0} revalidate={getTodos} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Todos;
