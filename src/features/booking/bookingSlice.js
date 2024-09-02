import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    date: [],
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
      let newItem = [...state.date];
      const findItem = state.date.find(({ id }) => id === payload.id);

      if (findItem) {
        //заменить текущий обьект кнопки на новый
      } else {
        newItem = [...newItem, { ...payload }];
      }
      state.date = newItem;
    },
  },
  extraReducers: (builder) => {},
});

export const { addDate, addProgram } = bookingSlice.actions;
export default bookingSlice.reducer;
