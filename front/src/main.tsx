import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { setupInterceptorsTo } from "./config/routes.ts";

import App from "./App.tsx";

setupInterceptorsTo(axios);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
