import "./assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

import App from "./App";
import { persistor, store } from "./store";
import { setupInterceptorsTo } from "./config/configAxios";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/styles";
import { getTheme } from "./config/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

setupInterceptorsTo(axios);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={getTheme()}>
          <BrowserRouter>
            <ToastContainer
              position="top-right"
              draggable
              closeOnClick
              autoClose={5_000}
            />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
