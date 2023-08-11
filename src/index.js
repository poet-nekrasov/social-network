import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
import store from "./Redux/reduxStore";
import { Provider } from "../node_modules/react-redux/es/exports";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
