import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { filterRoutesByAuthStep } from "./config/routes";
import { authSelector } from "./store/user/user.selector";

function App() {
  const isAuth = useSelector(authSelector);
  const routes = filterRoutesByAuthStep(!!isAuth);

  return (
    <Routes>
      {routes.map((item) => {
        return (
          <Route path={item.route} element={item.Element} key={item.route} />
        );
      })}
      <Route path="*" element={<Navigate replace to={routes[0].route} />} />
    </Routes>
  );
}

export default App;
