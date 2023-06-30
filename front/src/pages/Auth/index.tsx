import { useState } from "react";

import { Box, Typography } from "@mui/material";

import useStyles from "./useStyles";
import Card from "../../components/global/Card";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

const Auth = () => {
  const classes = useStyles();

  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    setRotate((perv) => !perv);
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        {rotate ? "REGISTER" : "LOGIN"}
      </Typography>

      <Box className={classes.content}>
        <Card
          frontNode={<Login toggleRotate={toggleRotate} />}
          backNode={<Register toggleRotate={toggleRotate} />}
          rotate={rotate}
        />
      </Box>
    </Box>
  );
};

export default Auth;
