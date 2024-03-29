import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import CategoryItem from "../../components/Category/CategoryItem";
import { getAllCategories as getAllCategoriesApi } from "../../apis/catrgories";
import { categoryType } from "../../types";

import useStyles from "./useStyles";

const Home = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [error, setError] = useState(false);

  const getCategories = (hasLoading = false) => {
    if (hasLoading) setCategoriesLoading(true);
    getAllCategoriesApi()
      .then((res) => setCategories(res.data))
      .catch(() => setError(true))
      .finally(() => setCategoriesLoading(false));
  };

  useEffect(getCategories, []);

  return (
    <Box className={classes.container}>
      <Typography variant="h1">CATEGORIES</Typography>

      <Box className={classes.content}>
        {categoriesLoading ? (
          <Box className={classes.centerBox}>
            <CircularProgress color="secondary" />
          </Box>
        ) : error ? (
          <Box className={classes.centerBox}>
            <Box className={classes.errorContainer}>
              <Typography color="red">has error</Typography>

              <LoadingButton
                color="primary"
                variant="contained"
                loading={categoriesLoading}
                onClick={() => {
                  setError(false);
                  getCategories(true);
                }}
              >
                try again
              </LoadingButton>
            </Box>
          </Box>
        ) : (
          <Box className={classes.categoriesContainer}>
            {[...categories, { name: "", _id: "add" }].map((item) => (
              <CategoryItem
                key={item._id}
                category={item}
                categories={categories}
                onClick={() => navigate(`/todos/${item._id}`)}
                revalidate={() => getCategories(true)}
                setCategories={setCategories}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
