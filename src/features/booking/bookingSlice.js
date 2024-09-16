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
    errors: [[],[],["You need to select Time"]],
    isOpenSearchPlaceSearch: false,
    time: [],
    services: [],
    formValid:null,
  },
  reducers: {
    addDate: (state, { payload }) => {
      const newDate = dayjs(payload).startOf("day").format("YYYY-MM-DD");
      state.date = [newDate];
    },
    addProgram: (state, { payload }) => {
      const idProgram = state.programList[0];

      if (idProgram && idProgram.id === payload.id) {
        return;
      }
      state.programList = [payload];
    },
    addError: (state, {payload}) => {
      const {index, error} = payload;
      state.errors[index] = error;
    },
    changedCountPeople: (state, { payload }) => {
      state.countPeople = payload;
    },
    addErrorButtonBook: (state, { payload }) => {
      state.errors[1] = payload;
    },
    addErrorTimeSelect: (state, { payload }) => {
        state.errors[2] = payload;
    },
    
    isOpenSearchPlace: (state) => {
      let newErrors = [];

      if (state.date.length === 0) {
        newErrors.push("Select Date");
      }

      if (state.countPeople === 0) {
        newErrors.push("Select number of people");
      }

      state.errors[0] = newErrors;

      state.isOpenSearchPlaceSearch = newErrors.length === 0;
    },
    addTime: (state, { payload }) => {
      state.time = payload;
    },
    addServices: (state, { payload }) => {
      const findServices = state.services.find(({ id }) => id === payload.id);

      if (findServices) {
        state.services = state.services.filter(({ id }) => id !== payload.id);
      } else {
        state.services = [...state.services, { ...payload }];
      }
    },
    formValidated: (state, {payload}) => {
      state.formValid = payload;
    }
  },
  extraReducers: (builder) => {},
});

export const selectPrograms = (state) => state.booking.programList;
export const selectDate = (state) => state.booking.date;
export const selectCountPeople = (state) => state.booking.countPeople;
export const selectErrors = (state) => state.booking.errors;
export const selectValidForm = (state) => state.booking.isOpenSearchPlaceSearch;
export const selectTime = (state) => state.booking.time;
export const selectServices = (state) => state.booking.services;
export const selectFormValid = (state) => state.booking.formValid;



export const {
  addDate,
  addProgram,
  changedCountPeople,
  addError,
  addErrorButtonBook,
  isOpenSearchPlace,
  addTime,
  addServices,
  formValidated,
  addErrorTimeSelect
} = bookingSlice.actions;
export default bookingSlice.reducer;
