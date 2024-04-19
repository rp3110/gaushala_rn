import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import ApiManager from "../../utils/ApiManager";
import { ApiUrl } from "../../utils/ApiUrl";


type ForgotPasswordState = {
    currentstate: "loading" | "error" | "successs" | undefined
    payload?: CommonResponseType
}

const initalState: ForgotPasswordState = {
    currentstate: undefined
}

export const forgotPasswordThunk = createAsyncThunk("forgotPasswordThunk", async (props: { email: string }) => {
    const res = await ApiManager.callPostMethod(
        {
            url: ApiUrl.forgotPassword,
            body: {
                UserEmail: props.email
            }
        }
    )
    if(res != null) {
        const response: CommonResponseType = await res.json()
        
        return response
    }
})

const forgotPasswordSlice = createSlice({
    name: "forgotPasswordSlice",
    reducers: {},
    initialState: initalState,
    extraReducers(builder) {
        builder.addCase(
            forgotPasswordThunk.pending,
            (state, action) => {
                state.currentstate = "loading"
            }
        )
        builder.addCase(
            forgotPasswordThunk.fulfilled,
            (state, action) => {
                if (action.payload != null) {
                        state.currentstate = "successs"
                        state.payload = action.payload
                } else {
                    state.currentstate = "error"
                }
            }
        )
        builder.addCase(
            forgotPasswordThunk.rejected,
            (state, action) => {
                if (action.payload != null) {
                        state.currentstate = "error"        
                }
            }
        )
    },
})

export default forgotPasswordSlice.reducer