import { Typography, Box } from "@mui/material";
import useStyles from "./useStyle";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Typography>this is footer</Typography>
    </Box>
  );
};

export default Footer;
