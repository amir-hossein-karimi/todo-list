import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    height: "100%",

    "& > h1": {
      textAlign: "center",
      marginBottom: "1.5rem",
    },
  },

  content: {
    flexGrow: "1",
    overflowY: "scroll",
  },

  errorContainer: {
    "& > p": {
      textAlign: "center",
      marginBottom: "3rem",
    },

    "& > button": {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  centerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

export default useStyles;
