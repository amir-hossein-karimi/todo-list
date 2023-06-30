import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
    flexGrow: "1",
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "column",

    "& >:first-child": {
      fontSize: ".85rem !important",
    },

    "& >:last-child": {
      marginTop: ".5rem",
      fontSize: ".65rem !important",
      color: theme.palette.text.primary,
    },
  },
}));

export default useStyles;
