import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import bookmarksReducer from "./bookmarks_reducer";

// combineReducers(reducers): (https://redux.js.org/api/combinereducers/)
// combineReducers function: to create a state object from all of applications reducers
// 1. As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.
// 2. The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// 3. The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()

export default combineReducers({
  //combineReducers is global state that would produce the following state object
  auth: authReducer,
  //On this huge piece of state, we'll have a property called auth & everything inside the 'auth' property will be come from 'authReducer' ('authReducer' is a partial piece of state that is gonna be saved on 'combineReducers', which is a giant piece of state, under the property 'auth')
  //whatever return from ‘authReducer’ will be set as the global state under ‘auth’
  bookmarks: bookmarksReducer
  // ... bookmarks, and other state managed by the bookmarksReducer, ...
});
