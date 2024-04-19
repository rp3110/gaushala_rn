import { combineReducers, createReducer } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";
import forgotPasswordSlice from "../reducers/forgotPasswordSlice";
import autoLoginSlice from "../reducers/autoLoginSlice";
import getDonationSlice from "../reducers/getDonationSlice";

const rootReducer = combineReducers({
    loginSlice,
    forgotPasswordSlice,
    autoLoginSlice,
    getDonationSlice
})

export default rootReducer