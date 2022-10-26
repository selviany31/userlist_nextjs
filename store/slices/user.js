import { createSlice } from "@reduxjs/toolkit"
import { getDataUsers, getDetailUser } from "../actions/user";

const initialState = {
    dataUsers: [],
    detailUser: {},
    loading: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getDataUsers.pending, (state) => {
            state.loading = true;
        })
        .addCase(getDataUsers.fulfilled, (state, action) => {
            state.loading = false
            state.dataUsers = action.payload
        })
        .addCase(getDataUsers.rejected, (state) => {
            state.loading = false;
            state.dataUsers = [];
        })
        .addCase(getDetailUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(getDetailUser.fulfilled, (state, action) => {
            state.loading = false
            state.detailUser = action.payload
        })
        .addCase(getDetailUser.rejected, (state) => {
            state.loading = false;
            state.detailUser = {};
        })
    }
})

// export const { getDataProduct, getDecrement, getIncrement, removeData } = productSlice.actions 

export default userSlice.reducer