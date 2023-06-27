import { Box, Card } from "@mui/material";
import useStyles from "./useStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Card className={classes.card}>test</Card>
    </Box>
  );
};

export default Login;
