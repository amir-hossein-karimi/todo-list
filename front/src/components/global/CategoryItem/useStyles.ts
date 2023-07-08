import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  categoryItem: {
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.darker}`,
    minHeight: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "50%",
    minWidth: "50%",
  },

  addIcon: {
    fontSize: "1.5rem",
  },
}));

export default useStyles;
