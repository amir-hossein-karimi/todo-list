import { createTheme, Theme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const getTheme = () =>
  createTheme({
    breakpoints: {
      values: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1180,
        xl: 1440,
      },
    },
    palette: {
      primary: {
        main: blueGrey["100"],
        dark: blueGrey["500"],
      },
      background: {
        default: blueGrey["300"],
      },
    },
    typography: {
      allVariants: {
        color: grey["50"],
      },
    },
  });
