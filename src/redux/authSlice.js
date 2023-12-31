import { createSlice } from "@reduxjs/toolkit";

const initialState={
    token:localStorage.getItem('token'),
    name:"",
    email:"",
    id:"",
    signUpStatus:"",
    signUpError:"",
    loginStatus:"",
    loginError:"",
    userLoaded:false
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:{}
})

export default authSlice.reducer;