import { createStore } from "redux";
import reducers from "./reducers";

export default createStore(
  //createStore: Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app. (https://redux.js.org/api/createstore/)

  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //Need to put this line in in order to use Redux devtools in browser.
  //Ref to:https://github.com/zalmoxisus/redux-devtools-extension
);
