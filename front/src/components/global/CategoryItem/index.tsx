import { FC } from "react";

import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useStyles from "./useStyles";

interface categoryItemProps {
  content?: string;
  isFull?: boolean;
}

const CategoryItem: FC<categoryItemProps> = ({ content, isFull }) => {
  const classes = useStyles({ isFull });

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
