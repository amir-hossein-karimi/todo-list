import { FC } from "react";

import { Box, Button, TextField } from "@mui/material";

import useStyles from "./useStyles";

interface loginProps {
  toggleRotate: () => void;
}

const Login: FC<loginProps> = ({ toggleRotate }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <TextField label="enter your username" />

        <TextField label="enter your password" />
      </Box>

      <Box className={classes.buttonsContainer}>
        <Button color="primary" variant="contained">
          login
        </Button>

        <Button onClick={toggleRotate} disableRipple>
          create an acount
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
