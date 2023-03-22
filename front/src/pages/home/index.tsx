import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/user/auth.reducers";

import useStyles from "./useStyles";

const HomePage = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <Typography>welcom to typescript config</Typography>

      <br />

      <Button variant="contained" onClick={logoutHandler}>
        logout
      </Button>
    </div>
  );
};

export default HomePage;
