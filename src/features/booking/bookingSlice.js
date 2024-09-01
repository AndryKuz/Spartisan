import { createSlice } from "@reduxjs/toolkit";


export const bookingSlice = createSlice({
    name: "booking",
    initialState:{
        date:[],
    },
    reducers:{
        addDate: (state, {payload}) => {
            state.date = payload;
        }
    },
    extraReducers: (builder) => {},
});

export const { addDate } = bookingSlice.actions;
export default bookingSlice.reducer; 