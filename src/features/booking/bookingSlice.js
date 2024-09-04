import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    date: [],
    program: [],
  },
  reducers: {
    addDate: (state, { payload }) => {
      const newDate = dayjs(payload).startOf("day").format("YYYY-MM-DD");
      if (state.date.length === 0) {
        state.date.push(newDate);
      } else {
        state.date[0] = newDate;
      }
    },
    addProgram: (state, { payload }) => {
      const idProgram = state.program[0];

      if(idProgram && idProgram.id === payload.id) {
        return;
      }
      state.program = [payload];
    },
  },
  extraReducers: (builder) => {},
});

export const { addDate, addProgram } = bookingSlice.actions;
export default bookingSlice.reducer;
