import { Box, Typography } from "@mui/material";

import useStyles from "./useStyles";
import Card from "../../components/global/Card";

const Auth = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        LOGIN
      </Typography>

      <Box className={classes.content}>
        <Card frontNode={<div>this is test</div>} />
      </Box>
    </Box>
  );
};

export default Auth;
