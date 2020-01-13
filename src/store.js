import { createStore, applyMiddleware, compose } from "redux";
import state from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  state,
  composeEnhancers(
    //createStore: Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app. (https://redux.js.org/api/createstore/)

    //Need to put this line in in order to use Redux devtools in browser.
    //Ref to:https://github.com/zalmoxisus/redux-devtools-extension
    applyMiddleware(thunk)
  )
);
