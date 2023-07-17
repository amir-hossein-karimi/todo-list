import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import TodoItem from "../../components/Todos/TodoItem";
import { todoType } from "../../types";
import { getAllTodos } from "../../apis/todos";
import AddTodo from "../../components/Todos/AddTodo";

import useStyles from "./useStyles";
import { TODO_STATUS } from "../../constants";

const Todos = () => {
  const classes = useStyles();

  const { categoryId } = useParams();

  const [expanded, setExpanded] = useState<string>("");

  const [todos, setTodos] = useState<todoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [statusFilter, setStatusFilter] = useState("all");

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
          <Box pt={"1rem"}>
            {todos.length > 0 && (
              <FormControl fullWidth>
                <InputLabel id="labelStatus" className={classes.selectLabel}>
                  status
                </InputLabel>

                <Select
                  labelId="labelStatus"
                  variant="standard"
                  label="status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                  defaultValue={"all"}
                >
                  {Object.entries({ ALL: "all", ...TODO_STATUS }).map(
                    ([key, value]) => (
                      <MenuItem key={key} value={value}>
                        {key}
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            )}
            {todos
              .filter(
                (item) => statusFilter === "all" || item.status === statusFilter
              )
              .sort((a, b) =>
                a.status === "in_progress"
                  ? -1
                  : b.status === "in_progress"
                  ? 1
                  : 0
              )
              .sort((a, b) =>
                a.status === "todo" ? -1 : b.status === "todo" ? 1 : 0
              )
              ?.map((todo) => (
                <TodoItem
                  key={todo._id}
                  todo={todo}
                  expanded={expanded === todo._id}
                  onChange={handleChange(todo._id)}
                  todos={todos}
                  setTodos={setTodos}
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
