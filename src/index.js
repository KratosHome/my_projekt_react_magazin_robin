import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./container/App";
import rootReducer from "./redux/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ScrollToTop from "./components/ScrollToTopOnMount/ScrollToTopOnMount";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
