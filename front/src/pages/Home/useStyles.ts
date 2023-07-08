import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    height: "100%",

    "& > h1": {
      textAlign: "center",
    },
  },

  content: {
    flexGrow: "1",
  },

  categoriesContainer: {
    display: "flex",
    width: "100%",
    marginTop: "2rem",
    flexWrap: "wrap",
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
