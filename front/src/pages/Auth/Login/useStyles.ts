import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  title: {
    marginTop: "1.5rem",
    textAlign: "center",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
  },

  card: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.text.primary,
    width: "20rem",
    minHeight: "12rem",
    borderRadius: ".5rem",
    padding: ".5rem",
    margin: ".5rem",

    [theme.breakpoints.down("xs")]: {
      width: "calc(100% - 1rem)",
    },
  },
}));

export default useStyles;
