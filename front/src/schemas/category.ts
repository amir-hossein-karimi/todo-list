import * as yup from "yup";

export const addCategorySchema = yup
  .object()
  .shape({
    category: yup.string().min(3).max(32).required(),
  })
  .required();
