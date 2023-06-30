import { useState, useImperativeHandle, forwardRef } from "react";

import { Box } from "@mui/material";

import useStyles from "./useStyles";

interface cardProps {
  frontNode?: React.ReactNode;
}

const Card = forwardRef<{ test: string }, cardProps>(({ frontNode }, ref) => {
  const classes = useStyles();

  const [rotate, setRotate] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      test: "this is test",
    }),
    []
  );

  return (
    <Box className={classes.card} onClick={() => setRotate((p) => !p)}>
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
        back
      </Box>
    </Box>
  );
});

export default Card;
