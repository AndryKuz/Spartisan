import { configureStore } from "@reduxjs/toolkit";

import userSlice from "auth/redux/authSlice";
import bookingSlice from "features/booking/bookingSlice";
import personalAreaSlice from "pages/PersonalArea/personalSlice";

export const store = configureStore({
  reducer: {
    booking: bookingSlice,
    user: userSlice,
    personal:personalAreaSlice,
  },
});
