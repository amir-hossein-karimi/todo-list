import { Box, Typography } from "@mui/material";

import useStyles from "./useStyles";
import CategoryItem from "../../components/global/CategoryItem";

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h1">T A</Typography>

      <Box className={classes.content}>
        <Box className={classes.categoriesContainer}>
          <CategoryItem content="item 1" />
          <CategoryItem content="item 2" />
          <CategoryItem content="item 3" />
          <CategoryItem />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
