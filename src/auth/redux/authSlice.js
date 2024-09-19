import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    showForm: false,
    formType: "register",
    showBurger: false,
    email: null,
    token: null,
    id: null,
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    toggleBurger: (state, { payload }) => {
      state.showBurger = payload;
    },
    setUser: (state, { payload }) => {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser: (state, { payload }) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },

  extraReducers: (builder) => {
    builder;
  },
});

export const {
  toggleForm,
  toggleFormType,
  setCurrentUser,
  toggleBurger,
  setUser,
  removeUser,
} = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectShowForm = (state) => state.user.showForm;
export const selectFormType = (state) => state.user.formType;
export const selectShowBurger = (state) => state.user.showBurger;
export const selectEmail = (state) => state.user.email;
