import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux"; //glue
import store from "./store";

ReactDOM.render(
  //store is the global state
  <Provider store={store}>
    {/* The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. */}
    <App />
  </Provider>,
  document.getElementById("root")
);
