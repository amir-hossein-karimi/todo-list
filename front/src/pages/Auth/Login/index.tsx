import { Box, Typography, TextField } from "@mui/material";
import useStyles from "./useStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>LOGIN</Typography>

      <Box className={classes.content}>
        <Box className={classes.card}>
          <TextField placeholder="enter youre email" autoComplete="off" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
