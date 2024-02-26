// import { createSlice } from "@reduxjs/toolkit";
// import {
//   // getloginData,
//   handleLogin,
//   handleLogout,
//   isloading,
// } from "../actions/adminActions";
import { adminCart } from '../actions/types';


const initialState = {
  UserId: null,
  isLoggedIn: false,
  loading: false,
  // loginData: {},
};

//  Reducers sent to the store

// const loginUser = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         handleLogin: (state, action) => {
//             state.UserId = action.payload
//             console.log('UserId', state.UserId)
//             state.isLoggedIn = true;
//             return state
//         },
//         handleLogout: (state) => {
//             state.UserId = null
//             state.isLoggedIn = false
//             return state
//         }
//     }
// })

// export const {handleLogin, handleLogout} = loginUser.actions
// export default loginUser.reducer

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    // case adminCart.LOGIN_DATA:
    //   return {
    //     state,
    //     loginData: action.payload,
    //   };

    case adminCart.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case adminCart.HANDLE_LOGIN:
      console.log(action.payload)
      return {
        ...state,
        UserId: action.payload,
        isLoggedIn: true,
      };


    case adminCart.HANDLE_LOGOUT:
      console.log(action.payload)
      return {
        ...state,
        UserId: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
