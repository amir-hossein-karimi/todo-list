import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  title: {
    marginTop: "1.5rem !important",
    textAlign: "center",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
  },
}));

export default useStyles;
