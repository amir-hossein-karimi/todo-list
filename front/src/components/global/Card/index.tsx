import { FC } from "react";

import { Box } from "@mui/material";

import useStyles from "./useStyles";

interface cardProps {
  frontNode?: React.ReactNode;
  backNode?: React.ReactNode;
  rotate: boolean;
}

const Card: FC<cardProps> = ({ frontNode, backNode, rotate = true }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Box
        className={`${classes.cardSide} ${classes.front} ${
          rotate ? "frontRotate" : ""
        }`}
      >
        {frontNode}
      </Box>

      <Box
        className={`${classes.cardSide} ${classes.back} ${
          rotate ? "backRotate" : ""
        }`}
      >
        {backNode}
      </Box>
    </Box>
  );
};

export default Card;
