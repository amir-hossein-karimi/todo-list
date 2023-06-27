import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "grid",
    placeItems: "center",
  },

  card: {
    backgroundColor: `${theme.palette.primary.test} !important`,
    color: `${theme.palette.text.primary} !important`,
    minWidth: "18rem",
    minHeight: "12rem",
  },
}));

export default useStyles;
