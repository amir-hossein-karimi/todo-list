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
import { FC, useEffect, useState } from "react";
import useStyles from "./useStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTodoSchema } from "../../../../schemas/todos";
import { TODO_STATUS } from "../../../../constants";
import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router-dom";
import { createTodo } from "../../../../apis/todos";

interface addTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
  revalidate: (arg: boolean) => void;
}

interface addTodoForm {
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
}

const AddTodoDialog: FC<addTodoDialogProps> = ({
  open,
  toggleDialog,
  revalidate,
}) => {
  const classes = useStyles();
  const { categoryId } = useParams();

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
      description: "",
      title: "",
      status: TODO_STATUS.TODO,
    },
  });

  const handleAddTodo = (todoData: addTodoForm) => {
    setLoading(true);
    createTodo(todoData, categoryId)
      .then(() => {
        toggleDialog();
        revalidate(true);
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
          add todo
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
            Age
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
          add
        </LoadingButton>
      </Box>
    </Dialog>
  );
};

export default AddTodoDialog;
