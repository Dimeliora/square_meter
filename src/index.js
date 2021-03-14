import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Store/Store";

import App from "./Components/App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
