import { DefaultTheme, makeStyles } from "@mui/styles";

interface statusType {
  status: "todo" | "in_progress" | "done";
}

const decorationByStatus = {
  todo: "none",
  in_progress: "underline",
  done: "line-through",
};

const colorByStatus = (theme: DefaultTheme) => ({
  todo: theme.palette.text.dark,
  in_progress: theme.palette.secondary.main,
  done: theme.palette.primary.dark,
});

const useStyles = makeStyles((theme) => ({
  summary: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  title: {
    textDecoration: ({ status }: statusType) => decorationByStatus[status],
    color: ({ status }: statusType) =>
      `${colorByStatus(theme)[status]} !important`,
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
