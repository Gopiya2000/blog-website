import { configureStore, createSlice } from "@reduxjs/toolkit";
//import { configure } from "@testing-library/react";

const authSlice = createSlice({
    name:"auth",
    initialState: { isLoggedIn : false},
    reducers: {
        login(state) { 
            state.isLoggedIn = true
        },logout(state) { 
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions

export const store = configureStore({
    reducer:authSlice.reducer
})

// module.exports = {
//     authActions:authActions,
//     store:store
// }