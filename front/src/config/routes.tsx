import React from "react";
import Layout from "../layout";
import { HomePage, LoginPage } from "../pages";

interface elementCreatorPropsTypes {
  Component: React.FC;
  showHeader?: boolean;
  showNavbar?: boolean;
}

interface routesType {
  route: string;
  Element: JSX.Element;
}

const ElementCreator = ({
  Component,
  showHeader,
  showNavbar,
}: elementCreatorPropsTypes): JSX.Element => {
  return (
    <Layout showHeader={showHeader} showNavbar={showNavbar}>
      <Component />
    </Layout>
  );
};

export const routes: routesType[] = [
  {
    route: "/",
    Element: ElementCreator({
      Component: HomePage,
      showHeader: true,
      showNavbar: true,
    }),
  },
  {
    route: "/login",
    Element: ElementCreator({
      Component: LoginPage,
    }),
  },
];

const allwaysShowRoutes: string[] = [];
const beforeAuthRoutes: string[] = ["/login"];

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
