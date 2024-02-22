import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    UserId: null,
    isLoggedIn: false,
    // loading: false
}

const loginUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleLogin: (state, action) => {
            state.UserId = action.payload
            console.log('UserId', state.UserId)
            state.isLoggedIn = true;
            return state
        },
        handleLogout: (state) => {
            state.UserId = null
            state.isLoggedIn = false
            return state
        }
    }
})

export const {handleLogin, handleLogout} = loginUser.actions
export default loginUser.reducer