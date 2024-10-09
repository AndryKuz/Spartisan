import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./index";

import ScrollToTop from "Scroll/ScrollToTop";

import Home from "pages/Home";
import Gallery from "pages/Gallery/Gallery";
import Gift from "pages/Gift/Gift";
import Booking from "pages/Booking/Booking";
import About from "pages/About/About";
import Result from "pages/Result/Result";
import PersonalArea from "pages/PersonalArea/PersonalArea";
import RequireAuth from "auth/RequireAuth";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.GIFT} element={<Gift />} />
        <Route path={ROUTES.BOOKING} element={<Booking />} />
        <Route path={ROUTES.BOOK} element={<Booking />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.RESULT} element={<Result />} />
        <Route path={ROUTES.PERSONAL} element={
          <RequireAuth>
            <PersonalArea/>
          </RequireAuth>
        }/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
