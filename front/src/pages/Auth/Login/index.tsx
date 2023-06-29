import { Box, Typography, TextField } from "@mui/material";
import useStyles from "./useStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        LOGIN
      </Typography>

      <Box className={classes.content}>
        <Box className={classes.card}>
          <TextField label="enter youre email" />

          <TextField label="enter your password" />

          <Typography variant="caption">create an acount</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
