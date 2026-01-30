import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../api/apiSlice";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        users: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(usersData.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(usersData.fulfilled, (state) => {
                state.loading = false;
                state.users = action.payload
            })
            .addCase(usersData.rejected, (state) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default usersSlice.reducer;