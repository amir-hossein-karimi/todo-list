import { Box, Typography } from "@mui/material";
import useStyles from "./useStyles";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Typography>this is header</Typography>
    </Box>
  );
};

export default Header;
