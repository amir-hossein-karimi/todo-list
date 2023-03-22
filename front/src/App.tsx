import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { filterRoutesByAuthStep } from "./config/routes";
import { isAuthSelector } from "./store/user/auth.selectors";
import { getTheme } from "./config/theme";

type themeType = "light" | "dark";

const getSystemThemeMode = (): themeType => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    return "dark";

  return "light";
};

function App() {
  const isAuth = useSelector(isAuthSelector);
  const routes = filterRoutesByAuthStep(isAuth);

  return (
    <ThemeProvider
      theme={getTheme({
        mode:
          (localStorage.getItem("theme") as themeType) || getSystemThemeMode(),
      })}
    >
      <Routes>
        {routes.map((item) => {
          return (
            <Route path={item.route} element={item.Element} key={item.route} />
          );
        })}
        <Route path="*" element={<Navigate replace to={routes[0].route} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
