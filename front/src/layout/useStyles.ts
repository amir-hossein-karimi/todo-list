import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  layoutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },

  componentContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
