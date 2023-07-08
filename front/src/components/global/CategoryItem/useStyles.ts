import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  categoryItem: {
    position: "relative",
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.darker}`,
    minHeight: "7rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "50%",
    minWidth: "50%",
    cursor: "pointer",
  },

  addIcon: {
    fontSize: "1.5rem",
  },

  addInput: {
    maxWidth: "15rem",
    width: "100%",

    "& input": {
      fontSize: "1rem !important",
    },
  },

  full: {
    maxWidth: "100% !important",
    minWidth: "100% !important",
  },

  more: {
    position: "absolute",
    top: ".5rem",
    left: ".5rem",
    width: "1.75rem",
    height: "1.75rem",
    backgroundColor: theme.palette.primary.darker,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",

    "& > svg": {
      fontSize: "1.5rem",
    },
  },
}));

export default useStyles;
