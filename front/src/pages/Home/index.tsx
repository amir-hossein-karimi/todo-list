import { useEffect, useState } from "react";

import { Box, Typography, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import CategoryItem from "../../components/global/CategoryItem";
import { getAllCategories as getAllCategoriesApi } from "../../apis/catrgories";

import useStyles from "./useStyles";

const Home = () => {
  const classes = useStyles();

  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  const getCategories = () => {
    getAllCategoriesApi()
      .then((res) => setCategories(res.data))
      .catch(() => setError(true))
      .finally(() => setCategoriesLoading(false));
  };

  useEffect(getCategories, []);

  return (
    <Box className={classes.container}>
      <Typography variant="h1">T A</Typography>

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
                onClick={getCategories}
              >
                try again
              </LoadingButton>
            </Box>
          </Box>
        ) : (
          <Box className={classes.categoriesContainer}>
            {[...categories, { name: undefined, _id: -1 }].map((item) => (
              <CategoryItem
                key={item._id}
                content={item.name}
                categories={categories}
                onClick={() => {
                  console.log("clicked");
                }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
