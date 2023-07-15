import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    padding: "1rem",
    minWidth: "16rem",
    maxWidth: "25rem",

    "& > div": {
      marginBottom: "1rem",
    },
  },

  title: {
    display: "block",
    textAlign: "center",
  },

  selectLabel: {
    left: "-14px !important",
  },
}));

export default useStyles;
