import { useState, useImperativeHandle, forwardRef } from "react";

import { Box } from "@mui/material";

import useStyles from "./useStyles";

interface cardProps {
  frontNode?: React.ReactNode;
  backNode?: React.ReactNode;
}

interface refProps {
  toggleSide: () => void;
}

const Card = forwardRef<refProps, cardProps>(({ frontNode, backNode }, ref) => {
  const classes = useStyles();

  const [rotate, setRotate] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      toggleSide() {
        setRotate((perv) => !perv);
      },
    }),
    []
  );

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
});

export default Card;
