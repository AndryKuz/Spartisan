import { createSlice } from "@reduxjs/toolkit";
import { personalButton } from "./components/Person/personalButtonData";

const [defaultPersonalButton] = personalButton;

export const personalAreaSlice = createSlice({
  name: "personalArea",
  initialState: {
    info: {
      firstName: null,
      lastName: null,
      phone: null,
      email: null,
      data: null,
      passwordOld: null,
      passwordNew: null,
      passwordNewAgain: null,
    },
    buyVisit:null,
    activeButton: defaultPersonalButton,
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
    changeButton: (state, { payload }) => {
      state.activeButton = payload;
    },
    getNumberOfVisits: (state, {payload}) => {
      state.buyVisit = payload;
    }
  },
  extraReducers: (builder) => {},
});

export const { updateInfo, changeButton,getNumberOfVisits } = personalAreaSlice.actions;
export default personalAreaSlice.reducer;
