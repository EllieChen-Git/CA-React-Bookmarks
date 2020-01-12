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
