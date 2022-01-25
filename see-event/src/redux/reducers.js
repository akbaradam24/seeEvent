const initialState = {
  user: "",
  token: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SAVE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: "",
        token: "",
      };
    default:
      return state;
  }
};

export default userReducer;
