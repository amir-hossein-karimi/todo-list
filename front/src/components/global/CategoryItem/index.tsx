import { FC, useRef, useState } from "react";

import { Box, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

import useStyles from "./useStyles";
import { LoadingButton } from "@mui/lab";
import { addCategory as addCategoryApi } from "../../../apis/catrgories";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { categoryType } from "../../../types";

interface categoryItemProps {
  content?: string;
  categories?: categoryType[];
  onClick: () => void;
}

interface categoryFormData {
  category: string;
}

const addCategorySchema = yup
  .object()
  .shape({
    category: yup.string().min(3).max(32).required(),
  })
  .required();

const CategoryItem: FC<categoryItemProps> = ({
  content,
  categories = [],
  onClick,
}) => {
  const classes = useStyles();

  const ref = useRef(null);

  const [addMode, setAddMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(addCategorySchema),
    reValidateMode: "onSubmit",
  });

  useOutsideClick(ref, (isOutsideClick) => {
    if (isOutsideClick) {
      reset();
      setAddMode(false);
    }
  });

  const switchToAddMode = () => {
    setAddMode(true);
  };

  const addCategory = (e: categoryFormData) => {
    console.log(e);
    // addCategoryApi({ name: e.category });
  };

  return (
    <Box
      className={`${classes.categoryItem} ${
        !content && categories.length === 0 && classes.full
      }`}
      onClick={content ? onClick : switchToAddMode}
      ref={ref}
    >
      {content ? (
        <Typography variant="h2">{content}</Typography>
      ) : addMode ? (
        <Box component={"form"} onSubmit={handleSubmit(addCategory)}>
          <TextField
            className={classes.addInput}
            label="category name"
            error={!!errors.category}
            helperText={<span>{errors.category?.message}</span>}
            InputProps={{
              endAdornment: (
                <LoadingButton type="submit">
                  <CheckIcon />
                </LoadingButton>
              ),
            }}
            {...register("category", { onChange: () => clearErrors("root") })}
          />
        </Box>
      ) : (
        <AddIcon className={classes.addIcon} />
      )}
    </Box>
  );
};

export default CategoryItem;
