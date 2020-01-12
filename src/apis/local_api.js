import axios from "axios";
import store from "./../store";

const LocalApi = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});
//axios.create([config]): You can create a new instance of axios with a custom config(https://github.com/axios/axios)

//axios.interceptors: You can intercept requests or responses before they are handled by then or catch.(https://github.com/axios/axios)

//this is a request interceptor (takes a callback funcation)
LocalApi.interceptors.request.use(config => {
  // interceptors (Do something before request is sent): whenever a request goes out, intercept it
  const state = store.getState();
  //getting entire global state from redux
  //getState() - store method on Redux: Returns the current state tree of your application. It is equal to the last value returned by the store's reducer. (https://redux.js.org/api/store/#getstate)

  const token = state.auth.token; //grab that token
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
  //Now every time we make a request using our local api, the authorisation header is being appended if we have a token!
});

export default LocalApi;
