import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    perspective: "150rem",
    position: "relative",
    boxShadow: "none",
    background: "none",
    minHeight: "15rem",
    minWidth: "19rem",

    "& .frontRotate": {
      transform: "rotateY(180deg) !important",
    },

    "& .backRotate": {
      transform: "rotateY(0deg) !important",
    },
  },

  cardSide: {
    width: "100%",
    height: "100%",
    borderRadius: theme.shape.cardRadius,
    transition: "all 0.8s ease",
    backfaceVisibility: "hidden",
    position: "absolute",
    top: "0",
    left: "0",
    padding: ".5rem 1rem",
    color: "white",
  },

  front: {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    boxShadow: "0px 0px 80px 9px #0093E9, 2px 2px 20px 6px #80D0C7",
    transform: "rotateY(0deg)",
  },

  back: {
    transform: "rotateY(-180deg)",
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%)",
    boxShadow: "0px 0px 80px 9px #C850C0, 2px 2px 20px 6px #8b94cb69",
  },
}));

export default useStyles;
