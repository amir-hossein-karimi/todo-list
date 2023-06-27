import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

interface customThemeInterface {
  palette: {
    primary: {
      main: string;
      dark: string;
      darker: string;
    };
    background: {
      default: string;
    };
    text: {
      primary: string;
    };
  };
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Omit<Theme, "palette">, customThemeInterface {}
}

declare module "@mui/material/styles" {
  interface CustomTheme extends Omit<Theme, "palette">, customThemeInterface {}

  interface CustomThemeOptions
    extends Omit<ThemeOptions, "palette">,
      customThemeInterface {}

  export function createTheme(options?: CustomThemeOptions): Theme;
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
        darker: blueGrey["500"],
        dark: blueGrey["200"],
      },
      background: {
        default: blueGrey["300"],
      },
      text: {
        primary: "#fff",
      },
    },
    typography: {
      allVariants: {
        color: "red",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "red",
          },
        },
        defaultProps: {
          variant: "h1",
        },
      },
    },
  });
