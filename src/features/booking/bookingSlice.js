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
    errors: [[], [], ["You need to select Time"]],
    isOpenSearchPlace: false,
    time: [],
    services: [],
    formValid: null,
    order: [],
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
    changedCountPeople: (state, { payload }) => {
      state.countPeople = payload;
    },
    addError: (state, { payload }) => {
      const { index, error } = payload;
      state.errors[index] = error;
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

      state.isOpenSearchPlace = newErrors.length === 0;
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
    formValidated: (state, { payload }) => {
      state.formValid = payload;
    },
    successOrder: (state) => {
      state.order.push({
        date: state.date,
        programList: state.programList,
        countPeople: state.countPeople,
        time: state.time,
        services: state.services,
        formValid: state.formValid,
      });
    },
    defaultInitialState: (state) => {
      state.date = [];
      state.programList = [defaultProgramButton];
      state.countPeople = 0;
      state.errors = [[], [], ["You need to select Time"]];
      state.time = [];
      state.services = [];
      state.formValid = null;
    }
  },
  extraReducers: (builder) => {},
});
export const {
  addDate,
  addProgram,
  changedCountPeople,
  addError,
  isOpenSearchPlace,
  addTime,
  addServices,
  formValidated,
  successOrder,
  defaultInitialState
} = bookingSlice.actions;
export default bookingSlice.reducer;

export const selectDate = (state) => state.booking.date;
export const selectPrograms = (state) => state.booking.programList;
export const selectCountPeople = (state) => state.booking.countPeople;
export const selectErrors = (state) => state.booking.errors;
export const selectValidForm = (state) => state.booking.isOpenSearchPlace;
export const selectTime = (state) => state.booking.time;
export const selectServices = (state) => state.booking.services;
export const selectFormValid = (state) => state.booking.formValid;
export const selectOrder = (state) => state.booking.order;

