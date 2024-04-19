import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ApiManager from "../../utils/ApiManager";
import { globalUserDetail } from "../../utils/GlobalVariables";
import { ApiUrl } from "../../utils/ApiUrl";
import { DonationResponse } from "../../types/DontaionType";

type DonationState = {
    currentState: "loading" | "success" | "error" | undefined,
    payload?: DonationResponse
}

const initalState: DonationState = {
    currentState: undefined
}

const getDonationSlice = createSlice({
    name: "getDonationSlice",
    reducers: {},
    initialState: initalState,
    extraReducers(builder) {
        builder.addCase(getDonationAsyncThunk.pending, (state, action)=>{
            state.currentState = "loading"
        })
        builder.addCase(getDonationAsyncThunk.fulfilled, (state, action)=> {
            if(action.payload != null) {
                state.currentState = "success"
                state.payload = action.payload
            } else {
                state.currentState = "error"
                state.payload = undefined
            }
        })
        builder.addCase(getDonationAsyncThunk.rejected, (state, action) => {
            state.currentState = "error"
            state.payload = undefined
        })
    },
})

export const getDonationAsyncThunk = createAsyncThunk("getDonationAsyncThunk", async (props:{page: number})=>{
    const response = await ApiManager.callGetMethod({
        url: ApiUrl.getAllDonationsById,
        queryParams: "?Id=" + globalUserDetail?.Id + "&Page=" + props.page
    })

    if(response != null) {
        const payload: DonationResponse = await response.json()
        return payload
    }
})

export default getDonationSlice.reducer