const defaultState = {
  // token: null
  // need to set a default value for state to avoid an undefined state
  token: sessionStorage.getItem("token") || null
  //need to initialise a default value of the properties on state
};

export default (state = defaultState, action) => {
  //state: our current state
  //all the actions we defined will be passed to all the reducers
  //So we need to decide what action is used in each reducer
  switch (action.type) {
    case "AUTH_TOKEN":
      // [Longhand]
      // let newState = { ...state }; //Create a copy of newState using destructuring
      // newState.token = action.payload; // Attach token to newState & set the value of token as 'action.payload'
      // return newState;
      return { ...state, token: action.payload };
    //[Shorthand]: making a copy of state, and adding token to the copy of state
    default:
      return state; //leave current version of state = defaultState(token:null)
  }
};
