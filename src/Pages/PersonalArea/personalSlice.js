import { createSlice } from "@reduxjs/toolkit";

export const personalAreaSlice = createSlice({
  name: "personalArea",
  initialState: {
    info: {
      firstName: 'Andry',
      lastName: 'fsfs',
      phone: 43424,
      email: 'fef@bk.ru',
      data: '02.06.1221',
      passwordOld:6666666666,
      passwordNew: 6666666666,
      passwordNewAgain: 66666666666666,
    },
  },
  reducers: {
    updateInfo: (state, action) => {
      const {
        firstName,
        lastName,
        phone,
        email,
        data,
        passwordOld,
        passwordNew,
        passwordNewAgain,
      } = action.payload;
      state.info.firstName = firstName;
      state.info.lastName = lastName;
      state.info.phone = phone;
      state.info.email = email;
      state.info.data = data;
      state.info.passwordOld = passwordOld;
      state.info.passwordNew = passwordNew;
      state.info.passwordNewAgain = passwordNewAgain;
    },
  },
  extraReducers: (builder) => {},
});

export const { updateInfo } = personalAreaSlice.actions;
export default personalAreaSlice.reducer;
