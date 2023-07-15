import * as yup from "yup";

export const addTodoSchema = yup
  .object()
  .shape({
    title: yup.string().min(3).max(32).required(),
    description: yup.string().min(6).max(20),
  })
  .required();
