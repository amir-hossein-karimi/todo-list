import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useStyles from "./useStyles";

interface layoutPropsType {
  showHeader?: boolean;
  showNavbar?: boolean;
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<layoutPropsType> = ({
  showHeader = false,
  showNavbar = false,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.layoutContainer}>
      <Box className={classes.componentContainer}>
        {showHeader && <Header />}

        {children}
      </Box>

      {showNavbar && <Footer />}
    </Box>
  );
};

export default Layout;
