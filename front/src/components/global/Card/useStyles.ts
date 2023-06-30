import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    perspective: "150rem",
    position: "relative",
    boxShadow: "none",
    background: "none",
    minHeight: "14rem",
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
    transform: "rotateY(0deg)",
  },

  back: {
    transform: "rotateY(-180deg)",
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%)",
  },
}));

export default useStyles;
