import { FC } from "react";

import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./useStyles";

interface categoryItemProps {
  content?: string;
}

const CategoryItem: FC<categoryItemProps> = ({ content }) => {
  const classes = useStyles();

  return (
    <Box className={classes.categoryItem}>
      {content ? (
        <Typography variant="h2">{content}</Typography>
      ) : (
        <AddIcon className={classes.addIcon} />
      )}
    </Box>
  );
};

export default CategoryItem;
