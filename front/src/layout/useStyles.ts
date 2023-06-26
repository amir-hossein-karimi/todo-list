import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    height: "100%",
    maxWidth: "36rem",
    margin: "0 auto",
    background: theme.palette.primary.main,
  },
}));

export default useStyles;
