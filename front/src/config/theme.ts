import { createTheme } from "@mui/material/styles";

// it could be your App.tsx file or theme file that is included in your tsconfig.json
// import { Theme } from "@mui/material/styles";

// declare module "@mui/styles/defaultTheme" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }

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
      primary: {},
      background: {},
      text: {},
    },
    typography: {
      allVariants: {},
    },
  });
