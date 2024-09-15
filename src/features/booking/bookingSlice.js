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
    errors: [[],[],[]],
    isOpenSearchPlaceSearch: false,
    time: [],
    services: [],
    dataPerson: [],
    formValid:null,
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
    formDataPerson: (state, { payload }) => {
      state.dataPerson = payload;
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
export const selectFormDataPerson = (state) => state.booking.dataPerson;
export const selectFormValid = (state) => state.booking.formValid;



export const {
  addDate,
  addProgram,
  changedCountPeople,
  addErrorButtonBook,
  isOpenSearchPlace,
  addTime,
  addServices,
  formDataPerson,
  formValidated,
  addErrorTimeSelect
} = bookingSlice.actions;
export default bookingSlice.reducer;
