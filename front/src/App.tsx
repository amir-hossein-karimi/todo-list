import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { filterRoutesByAuthStep } from "./config/routes";
import { authSelector } from "./store/user/user.selector";
import getSystemTheme, { themeType } from "./utils/getSystemTheme";
import { getTheme } from "./config/theme";

function App() {
  const isAuth = useSelector(authSelector);
  const routes = filterRoutesByAuthStep(!!isAuth);

  return (
    <ThemeProvider
      theme={getTheme({
        mode: (localStorage.getItem("theme") as themeType) || getSystemTheme(),
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
