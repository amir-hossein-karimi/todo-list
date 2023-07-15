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
import { FC } from "react";
import useStyles from "./useStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTodoSchema } from "../../../../schemas/todos";

interface addTodoDialogProps {
  open: boolean;
  toggleDialog: () => void;
}

const AddTodoDialog: FC<addTodoDialogProps> = ({ open, toggleDialog }) => {
  const classes = useStyles();

  const { register } = useForm({
    resolver: yupResolver(addTodoSchema),
    reValidateMode: "onSubmit",
  });

  return (
    <Dialog open={open} onClose={toggleDialog}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="caption">
          add todo
        </Typography>

        <TextField label="title" {...register("title")} />

        <TextField label="description" {...register("description")} />

        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
      </Box>
    </Dialog>
  );
};

export default AddTodoDialog;
