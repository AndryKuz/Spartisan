import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { nameButtonProgram } from "../../constants/programCart";

const defaultProgramButton = nameButtonProgram.find(item => item.id === 1);



export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    date: [],
    programList: [defaultProgramButton],
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
      const idProgram = state.programList[0];

      if(idProgram && idProgram.id === payload.id) {
        return;
      }
      state.programList = [payload];
    },
  },
  extraReducers: (builder) => {},
});


export const selectPrograms = (state) => state.booking.programList;
export const selectDate = (state) => state.booking.date;

export const { addDate, addProgram } = bookingSlice.actions;
export default bookingSlice.reducer;
