import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  categoryItem: {
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
}));

export default useStyles;
