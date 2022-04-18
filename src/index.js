import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../public/assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/config-store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
