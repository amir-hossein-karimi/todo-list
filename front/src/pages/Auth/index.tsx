import { useRef } from "react";

import { Box, Typography } from "@mui/material";

import useStyles from "./useStyles";
import Card from "../../components/global/Card";

const Auth = () => {
  const classes = useStyles();

  const cardRef = useRef({
    toggleSide: () => null,
  });

  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        LOGIN
      </Typography>

      <Box className={classes.content}>
        <Card
          frontNode={
            <div>
              <button onClick={() => cardRef?.current?.toggleSide()}>
                change side
              </button>
            </div>
          }
          ref={cardRef}
          backNode={
            <div>
              <button onClick={() => cardRef?.current?.toggleSide()}>
                change side again
              </button>
            </div>
          }
        />
      </Box>
    </Box>
  );
};

export default Auth;
