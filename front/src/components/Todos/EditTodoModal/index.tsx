import {
  Box,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { TODO_STATUS } from "../../../constants";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTodoSchema } from "../../../schemas/todos";
import useStyles from "./useStyles";
import { updateTodo } from "../../../apis/todos";
import { todoType } from "../../../types";
import { toast } from "react-toastify";

interface addTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
  todo: todoType;
  todos: todoType[];
  setTodos: Dispatch<SetStateAction<todoType[]>>;
}

interface addTodoForm {
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
}

const EditTodoModal: FC<addTodoDialogProps> = ({
  open,
  toggleDialog,
  setTodos,
  todo,
  todos,
}) => {
  const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<addTodoForm>({
    resolver: yupResolver(addTodoSchema),
    reValidateMode: "onSubmit",
    defaultValues: {
      description: todo.description,
      title: "",
      status: TODO_STATUS.TODO,
    },
  });

  const handleAddTodo = (todoData: addTodoForm) => {
    setLoading(true);

    updateTodo(todoData, todo._id)
      .then(() => {
        const newData = [...todos];

        const todoIndex = newData.findIndex((item) => item._id === todo._id);

        newData.splice(todoIndex, 1, { ...todo, ...todos });

        setTodos(newData);

        toggleDialog();
        toast.success("todo deleted successfully");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (open) {
      setValue("description", "");
      setValue("title", "");
      setValue("status", TODO_STATUS.TODO);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Box
        className={classes.container}
        component={"form"}
        onSubmit={handleSubmit(handleAddTodo)}
      >
        <Typography className={classes.title} variant="caption">
          edit todo
        </Typography>

        <TextField
          label="title"
          {...register("title")}
          error={!!errors.title}
          helperText={<span>{errors.title?.message}</span>}
        />

        <TextField
          label="description"
          {...register("description")}
          error={!!errors.description}
          helperText={<span>{errors.description?.message}</span>}
        />

        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            className={classes.selectLabel}
          >
            status
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="standard"
            label="status"
            {...register("status")}
            defaultValue={TODO_STATUS.TODO}
          >
            {Object.entries(TODO_STATUS).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          loading={loading}
        >
          edit
        </LoadingButton>
      </Box>
    </Dialog>
  );
};

export default EditTodoModal;
