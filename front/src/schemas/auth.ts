import * as yup from "yup";

export const authFormSchema = yup
  .object()
  .shape({
    username: yup.string().min(3).max(32).required(),
    password: yup.string().min(6).max(20).required(),
  })
  .required();
