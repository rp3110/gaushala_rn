import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LoginResponse from "../../types/LoginResponseType";
import ApiManager from "../../utils/ApiManager";
import { ApiUrl } from "../../utils/ApiUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../../utils/AsyncStorageKey";
import { setglobalUserDetail } from "../../utils/GlobalVariables";


interface LoginState {
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
    payload?: LoginResponse
}


const initialLoginState: LoginState = {
    isLoading: false,
    isError: false,
    isSuccess: false
}


export const attemptLogin = createAsyncThunk("attemptLogin", async ({ email, password }: { email: string, password: string }) => {
    let response = await ApiManager.callPostMethod({
        url: ApiUrl.loginUrl,
        body: {
            "Email": email,
            "Password": password
        }
    })
    if (response != null) {
        const payload: LoginResponse = await response.json()
        await AsyncStorage.setItem(AsyncStorageKeys.isLogin, JSON.stringify(true))
        await AsyncStorage.setItem(AsyncStorageKeys.accessToken, payload.Result.Token)
        await AsyncStorage.setItem(AsyncStorageKeys.refreshToken, payload.Result.RefreshToken)
        setglobalUserDetail({ userDetail: payload.Result.UserDetail })
        return payload
    }
})

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialLoginState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(attemptLogin.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(attemptLogin.fulfilled, (state, action) => {
            state.isLoading = false
            if (action.payload != null) {
                state.isSuccess = true
                state.payload = action.payload
            } else {
                state.isError = true
                state.payload = undefined
            }

        })
        builder.addCase(attemptLogin.rejected, (state, action) => {
            state.isError = true
            state.payload = undefined
        })
    },
})

export default loginSlice.reducer