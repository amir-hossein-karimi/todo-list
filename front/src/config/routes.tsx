import { ReactNode } from "react";
import { Home, Login, Register } from "../pages";

interface routesType {
  route: string;
  Element: ReactNode;
}

export const routes: routesType[] = [
  {
    route: "/",
    Element: <Home />,
  },
  {
    route: "/login",
    Element: <Login />,
  },
  {
    route: "/register",
    Element: <Register />,
  },
];

const allwaysShowRoutes: string[] = [];
const beforeAuthRoutes: string[] = ["/login", "/register"];

export const filterRoutesByAuthStep = (isAuth: boolean) => {
  // eslint-disable-next-line array-callback-return
  return routes.filter((item) => {
    if (!isAuth) {
      if (
        beforeAuthRoutes.includes(item.route) ||
        allwaysShowRoutes.includes(item.route)
      ) {
        return item;
      }
    } else if (
      !beforeAuthRoutes.includes(item.route) ||
      allwaysShowRoutes.includes(item.route)
    ) {
      return item;
    }
  });
};
