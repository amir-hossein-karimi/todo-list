import {
  FC,
  useRef,
  useState,
  MouseEvent,
  SetStateAction,
  Dispatch,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Box,
  Menu,
  MenuItem,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { LoadingButton } from "@mui/lab";

import {
  addCategory as addCategoryApi,
  deleteCategory,
  updateCategory,
} from "../../../apis/catrgories";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { categoryType } from "../../../types";

import useStyles from "./useStyles";

interface categoryItemProps {
  category: categoryType;
  categories?: categoryType[];
  onClick: () => void;
  revalidate?: () => void;
  setCategories: Dispatch<SetStateAction<categoryType[]>>;
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
  category,
  categories = [],
  onClick,
  revalidate,
  setCategories,
}) => {
  const classes = useStyles();

  const ref = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 0);
  };

  const [addMode, setAddMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [cardLoading, setCardLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(addCategorySchema),
    reValidateMode: "onSubmit",
  });

  useOutsideClick(ref, (isOutsideClick) => {
    if (isOutsideClick && !loading) {
      reset();
      setAddMode(false);
      setEditMode(false);
      handleCloseMenu();
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

  const handleDelete = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    handleCloseMenu();
    setCardLoading(true);

    deleteCategory(category._id)
      .then(() => {
        toast.success("category deleted successfully");
        const newData = [...categories];

        const deletedCategoryIndex = newData.findIndex(
          (item) => item._id === category._id
        );

        newData.splice(deletedCategoryIndex, 1);

        setCategories([...newData]);
      })
      .finally(() => setCardLoading(false));
  };

  const handleEdit = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setEditMode(true);
    setValue("category", category.name);
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  };

  const editCategory = (e: categoryFormData) => {
    setLoading(true);

    updateCategory({ name: e.category, id: category._id })
      .then(() => {
        toast.success("category updated successfully");
        const newData = [...categories];

        const deletedCategoryIndex = newData.findIndex(
          (item) => item._id === category._id
        );

        newData.splice(deletedCategoryIndex, 1, {
          name: e.category,
          _id: category._id,
        });

        setCategories([...newData]);
        setEditMode(false);
        reset();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      className={`${classes.categoryItem} ${
        !category.name && categories.length === 0 && classes.full
      }`}
      onClick={
        loading || addMode || editMode || anchorEl !== null
          ? () => null
          : category.name
          ? onClick
          : switchToAddMode
      }
      ref={ref}
    >
      {addMode || editMode ? (
        <Box
          component={"form"}
          onSubmit={handleSubmit(editMode ? editCategory : addCategory)}
        >
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
      ) : category.name ? (
        <>
          {cardLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Typography variant="h2">{category.name}</Typography>
          )}

          <Box
            className={classes.more}
            onClick={(e) => (cardLoading ? null : handleClickMenu(e))}
          >
            <MoreHorizIcon />
          </Box>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleEdit}>edit</MenuItem>

            <MenuItem onClick={handleDelete}>delete</MenuItem>
          </Menu>
        </>
      ) : (
        <AddIcon className={classes.addIcon} />
      )}
    </Box>
  );
};

export default CategoryItem;
