import { combineReducers } from "redux";

import  loginUser  from "./features/adminSlice";
import cartSliceState from "./features/cartSlice";

export const mainReducer = combineReducers({
    user: loginUser ,
    cart: cartSliceState
})