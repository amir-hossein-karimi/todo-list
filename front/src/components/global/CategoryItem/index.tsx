import { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Box, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { LoadingButton } from "@mui/lab";

import { addCategory as addCategoryApi } from "../../../apis/catrgories";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { categoryType } from "../../../types";
import useStyles from "./useStyles";

interface categoryItemProps {
  content?: string;
  categories?: categoryType[];
  onClick: () => void;
  revalidate?: () => void;
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
  revalidate,
}) => {
  const classes = useStyles();

  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);

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
    if (isOutsideClick && !loading && addMode) {
      reset();
      setAddMode(false);
    }
  });

  const switchToAddMode = () => {
    setAddMode(true);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  const addCategory = (e: categoryFormData) => {
    setLoading(true);
    addCategoryApi({ name: e.category })
      .then(() => {
        reset();
        setAddMode(false);
        toast.success("category added successfully");
        revalidate?.();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      className={`${classes.categoryItem} ${
        !content && categories.length === 0 && classes.full
      }`}
      onClick={loading ? () => null : content ? onClick : switchToAddMode}
      ref={ref}
    >
      {content ? (
        <>
          <Typography variant="h2">{content}</Typography>

          <Box
            className={classes.more}
            onClick={(e) => {
              e.stopPropagation();
              console.log("what");
            }}
          >
            <MoreHorizIcon />
          </Box>
        </>
      ) : addMode ? (
        <Box component={"form"} onSubmit={handleSubmit(addCategory)}>
          <TextField
            className={classes.addInput}
            label="category name"
            error={!!errors.category}
            inputRef={inputRef}
            helperText={<span>{errors.category?.message}</span>}
            InputProps={{
              endAdornment: (
                <LoadingButton type="submit" loading={loading}>
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
