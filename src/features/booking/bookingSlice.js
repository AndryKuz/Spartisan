import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { nameButtonProgram } from "constants/programCart";

const defaultProgramButton = nameButtonProgram.find((item) => item.id === 1);

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    date: [],
    programList: [defaultProgramButton],
    countPeople: 0,
    errors: [],
    validatedFormSearch: false,
    time:[]
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

      if (idProgram && idProgram.id === payload.id) {
        return;
      }
      state.programList = [payload];
    },
    changedCountPeople: (state, { payload }) => {
      state.countPeople = payload;
    },
    findErrors: (state, { payload }) => {
      state.errors.push = payload;
    },
    validatedForm: (state, { payload }) => {
      let newErrors = [];

      if (state.date.length === 0) {
        newErrors.push("Select Date");
      }

      if (state.countPeople === 0) {
        newErrors.push("Select number of people");
      }

      state.errors = newErrors;

      state.validatedFormSearch = newErrors.length === 0;

    },
    addTime: (state, {payload}) => {
state.time = payload;
    }
  },
  extraReducers: (builder) => {},
});

export const selectPrograms = (state) => state.booking.programList;
export const selectDate = (state) => state.booking.date;
export const selectCountPeople = (state) => state.booking.countPeople;
export const selectErrors = (state) => state.booking.errors;
export const selectValidForm = (state) => state.booking.validatedFormSearch;
export const selectTime = (state) => state.booking.time;

export const { addDate, addProgram, changedCountPeople, validatedForm,addTime } =
  bookingSlice.actions;
export default bookingSlice.reducer;
