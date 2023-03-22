import { createTheme } from "@mui/material/styles";

// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface themeProps {
  mode: "light" | "dark";
}

export const getTheme = ({ mode }: themeProps) =>
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
        ...(mode === "light"
          ? {
              main: "#19A7CE",
              secondary: "#cbd5e0",
            }
          : {
              main: "#208dab",
              secondary: "#868e96",
            }),
      },
      background: {
        ...(mode === "light" ? { default: "#b2d8ff" } : { default: "#212529" }),
      },
      text: {
        ...(mode === "light" ? { primary: "#000" } : { primary: "#fafafa" }),
      },
    },
    typography: {
      allVariants: {
        color: mode === "light" ? "#000" : "#fafafa",
      },
    },
  });
