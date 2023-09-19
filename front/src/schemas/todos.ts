import * as yup from "yup";
import { TODO_STATUS } from "../constants";

export const addTodoSchema = yup
  .object()
  .shape({
    title: yup.string().min(3).max(32).required(),
    description: yup.string().max(300),
    status: yup.string().default(TODO_STATUS.TODO),
  })
  .required();
