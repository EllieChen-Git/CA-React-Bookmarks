export default (state = [], action) => {
  switch (action.type) {
    case "SET_BOOKMARKS":
      return action.payload;
    //shorthand: when taking the copy, changing token to ...
    default:
      return state;
    //leave my current version of state = defaultState(token:null)
  }
};
