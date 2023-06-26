import React, { FC } from "react";

import { Box } from "@mui/material";

import useStyles from "./useStyles";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.layoutContainer}>{children}</Box>;
};

export default Layout;
