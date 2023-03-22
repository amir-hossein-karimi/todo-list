import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: "grid",
    placeItems: "center",
    backgroundColor: "rgb(255,255,255)",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 100%)",
    padding: "1rem",
    width: "100%",

    "& > p": {
      color: "#000",
    },
  },
}));

export default useStyles;
