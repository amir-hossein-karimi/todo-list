import { ReactNode } from "react";
import Layout from "../layout";
import { Home, Auth } from "../pages";

interface routesType {
  route: string;
  Element: ReactNode;
}

export const routes: routesType[] = [
  {
    route: "/",
    Element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    route: "/auth",
    Element: (
      <Layout>
        <Auth />
      </Layout>
    ),
  },
];

const allwaysShowRoutes: string[] = [];
const beforeAuthRoutes: string[] = ["/auth"];

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
