import { combineReducers } from "redux";

import { adminReducer } from "./features/adminReducer";
// import { cartReducer } from "./features/cartReducer";

export const mainReducer = combineReducers({
  admin: adminReducer,
  // cart: cartReducer,
});
