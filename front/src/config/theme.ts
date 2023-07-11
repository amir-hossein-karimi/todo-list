import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { blue, blueGrey, grey } from "@mui/material/colors";

interface customThemeInterface {
  palette: {
    primary: {
      main: string;
      dark: string;
      darker: string;
    };
    secondary: {
      main: string;
    };
    background: {
      default: string;
      white: string;
    };
    text: {
      primary: string;
    };
  };
  shape: {
    borderRadius: number;
    cardRadius: number;
  };
  breakpoints: {
    values: {
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme
    extends Omit<Theme, "palette" | "shape" | "breakpoints">,
      customThemeInterface {}
}

declare module "@mui/material/styles" {
  interface CustomTheme
    extends Omit<Theme, "palette" | "shape" | "breakpoints">,
      customThemeInterface {}

  interface CustomThemeOptions
    extends Omit<ThemeOptions, "palette" | "shape" | "breakpoints">,
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
      h2: {
        fontSize: "1.5rem",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            color: `${grey[800]} !important`,

            "& > div:hover": {
              "& ::after, ::before": {
                borderBottom: `1px solid ${grey[800]} !important`,
              },
            },

            "& > label, input": {
              color: `${grey[800]} !important`,
              fontSize: ".8rem",
            },

            "& > div:after, div:before": {
              borderBottom: `1px solid ${grey[800]}`,
              transform: "scale(1) !important",
            },
          },
        },
        defaultProps: {
          variant: "standard",
          autoComplete: "off",
          InputProps: {
            autoComplete: "off",
          },
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
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xxs: 0,
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
      secondary: {
        main: blue["500"],
      },
      background: {
        default: blueGrey["300"],
        white: "#fff",
      },
      text: {
        primary: "#fff",
      },
    },
  });
