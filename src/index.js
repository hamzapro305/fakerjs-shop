import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("HS-APP"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
