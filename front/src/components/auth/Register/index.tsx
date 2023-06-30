import { FC } from "react";

import { Box, Button, TextField } from "@mui/material";

import useStyles from "./useStyles";

interface registerProps {
  toggleRotate: () => void;
}

const Register: FC<registerProps> = ({ toggleRotate }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <TextField label="enter your username" />

        <TextField label="enter your password" />
      </Box>

      <Box className={classes.buttonsContainer}>
        <Button color="primary" variant="contained">
          register
        </Button>

        <Button onClick={toggleRotate} disableRipple>
          login with your acount
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
