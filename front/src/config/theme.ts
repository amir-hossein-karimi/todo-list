import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

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
  shape: {
    borderRadius: number;
    cardRadius: number;
  };
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme
    extends Omit<Theme, "palette" | "shape">,
      customThemeInterface {}
}

declare module "@mui/material/styles" {
  interface CustomTheme
    extends Omit<Theme, "palette" | "shape">,
      customThemeInterface {}

  interface CustomThemeOptions
    extends Omit<ThemeOptions, "palette" | "shape">,
      customThemeInterface {}

  export function createTheme(options?: CustomThemeOptions): Theme;
}

export const getTheme = () =>
  createTheme({
    shape: {
      borderRadius: 4,
      cardRadius: 12,
    },
    typography: {
      allVariants: {
        color: grey["800"],
      },
      h1: {
        fontSize: "2rem",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            color: `${grey[800]} !important`,

            "& > label, input": {
              color: `${grey[800]} !important`,
              fontSize: ".8rem",
            },

            "& > div:after, div:before": {
              borderBottom: `1px solid ${grey[800]} !important`,
              transform: "scale(1) !important",
            },
          },
        },
        defaultProps: {
          variant: "standard",
          autoComplete: "off",
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: grey[800],
            boxShadow: "none !important",
          },
        },
      },
    },
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
  });
