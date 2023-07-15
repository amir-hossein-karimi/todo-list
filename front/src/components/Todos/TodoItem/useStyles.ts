import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  summary: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  actionButtons: {
    display: "flex",

    "& > button": {
      padding: "0",
      minWidth: "2.5rem",
    },
  },
}));

export default useStyles;
