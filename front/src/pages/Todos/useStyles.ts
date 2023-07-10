import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
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

  todosListContainer: {},
}));

export default useStyles;
