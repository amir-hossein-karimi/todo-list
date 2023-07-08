import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
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
}));

export default useStyles;
