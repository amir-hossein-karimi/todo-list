import { makeStyles } from "@mui/styles";

interface entryProps {
  isFull?: boolean;
}

const useStyles = makeStyles((theme) => ({
  categoryItem: {
    backgroundColor: theme.palette.primary.dark,
    border: `1px solid ${theme.palette.primary.darker}`,
    minHeight: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: ({ isFull }: entryProps) => (isFull ? "100%" : "50%"),
    minWidth: ({ isFull }: entryProps) => (isFull ? "100%" : "50%"),
    cursor: "pointer",
  },

  addIcon: {
    fontSize: "1.5rem",
  },
}));

export default useStyles;
