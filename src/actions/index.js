import LocalApi from "./../apis/local_api";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);
  return {
    type: "AUTH_TOKEN", //Naming convention: capiptalise & link each word with '_'
    payload: token //convention: payload (data we are sending it through)
  }; // payload: where it actually holds our token
};

export const setBookmarks = bookmarks => {
  return {
    type: "SET_BOOKMARKS",
    payload: bookmarks
  };
};

//react thunk: we need to manually call a dispatch func
export const fetchBookmarks = () => {
  return async (dispatch, getState) => {
    let response = await LocalApi.get("/bookmarks");
    // axois return response
    return dispatch({
      type: "SET_BOOKMARKS",
      payload: response.data
      //access data: response.data
    });
  };
};
