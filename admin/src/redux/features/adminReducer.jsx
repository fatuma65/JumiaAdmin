import { adminCart } from "../actions/types";

const initialState = {
  UserId: null,
  isLoggedIn: false,
  loading: false,
};

//  Reducers sent to the store

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminCart.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case adminCart.HANDLE_LOGIN:
      console.log(action.payload);
      return {
        ...state,
        UserId: action.payload,
        isLoggedIn: true,
      };

    case adminCart.HANDLE_LOGOUT:
      console.log(action.payload);
      return {
        ...state,
        UserId: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
