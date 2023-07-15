import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "1rem",
    minWidth: "16rem",
    maxWidth: "20rem",
  },

  buttonsContainer: {
    display: "flex",
    gap: ".5rem",
    marginTop: "2rem",

    "& > button": {
      width: "100%",
    },
  },
}));

export default useStyles;
