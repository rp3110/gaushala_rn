import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiManager from "../../utils/ApiManager";
import { ApiUrl } from "../../utils/ApiUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../utils/AsyncStorageKey";
import { AutoLoginResponse } from "../../types/AutoLoginResponseType";
import { setglobalUserDetail } from "../../utils/GlobalVariables";


export type AutoLoginState = {
    currentState: "loading" | "error" | "success" | undefined
    payload?: AutoLoginResponse
}

let AutoLoginInitialState: AutoLoginState = {
    currentState: undefined
}

const autoLoginSlice = createSlice({
    name: "autoLoginSlice",
    initialState: AutoLoginInitialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(autoLoginThunk.pending, (state, action) => {
            state.currentState = "loading"
        })
        builder.addCase(autoLoginThunk.fulfilled, (state, action) => {
            if (action.payload != null || action.payload != undefined) {
                state.currentState = "success"
                state.payload = action.payload
            } else {
                state.currentState = "error"
                state.payload = undefined
            }
        })
        builder.addCase(autoLoginThunk.rejected, (state, action) => {
            state.currentState = "error"
            state.payload = undefined
        })
    },
})

export const autoLoginThunk = createAsyncThunk("autoLoginThunk", async () => {
console.log("hello");


    const accessToken = await AsyncStorage.getItem(AsyncStorageKeys.accessToken)
    const refreshToken = await AsyncStorage.getItem(AsyncStorageKeys.refreshToken)
    const body = {
        AccessToken: accessToken,
        RefreshToken: refreshToken
    }

    const response = await ApiManager.callPostMethod({
        url: ApiUrl.autoLogin,
        body: body
    })

    if (response != null) {
        const payload: AutoLoginResponse = await response.json()
        await AsyncStorage.setItem(AsyncStorageKeys.isLogin, JSON.stringify(true))
        await AsyncStorage.setItem(AsyncStorageKeys.accessToken, payload.Result.AccessToken)
        await AsyncStorage.setItem(AsyncStorageKeys.refreshToken, payload.Result.RefreshToken)
        setglobalUserDetail({ userDetail: payload.Result.UserDetail })
        console.log(`----111${JSON.stringify(payload)}`);
        
        return payload
    } else {
        await AsyncStorage.setItem(AsyncStorageKeys.isLogin, JSON.stringify(false))
    }
})


export default autoLoginSlice.reducer