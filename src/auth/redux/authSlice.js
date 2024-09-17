import { createSlice } from "@reduxjs/toolkit";




export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    showForm: false,
    formType: "login",
    showBurger: false,
    
  },
  reducers: {
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    toggleBurger: (state, {payload}) => {
        state.showBurger = payload;
    }
  },

  extraReducers: (builder) => {
    builder
    //   .addCase(createUser.fulfilled, (state, { payload }) => {
    //     state.currentUser = payload;
    //   })
    //   .addCase(loginUser.fulfilled, (state, { payload }) => {
    //     state.currentUser = payload;
    //   });
    // //   .addCase(updateUser.fulfilled, (state, { payload }) => {
    // //     state.currentUser = payload;
    // //   });
  },
});

export const {
  toggleForm,
  toggleFormType,
  toggleBurger
} = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectShowForm = (state) => state.user.showForm;
export const selectFormType = (state) => state.user.formType;
export const selectShowBurger = (state) => state.user.showBurger;

