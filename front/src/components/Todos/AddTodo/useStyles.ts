import { makeStyles } from "@mui/styles";

interface entryType {
  hasTodo: boolean;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
    background: theme.palette.background.white,
    padding: ".75rem 1rem",
    borderRadius: ({ hasTodo }: entryType) =>
      hasTodo ? "" : theme.shape.borderRadius,
    borderTop: ({ hasTodo }: entryType) =>
      hasTodo ? "1px solid rgba(0, 0, 0, 0.12)" : "",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    cursor: "pointer",
  },
}));

export default useStyles;
