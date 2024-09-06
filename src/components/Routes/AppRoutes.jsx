import { Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "./index";

import Home from "pages/Home";
import Gallery from "pages/Gallery/Gallery";
import Gift from "pages/Gift/Gift";
import Booking from "pages/Booking/Booking";
import About from "pages/About/About";
import Payment from "pages/Payment";
import NotFound from "pages/NotFound";

import ScrollToTop from "Scroll/ScrollToTop";


const AppRoutes = () => {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.GIFT} element={<Gift />} />
        <Route path={ROUTES.BOOKING} element={<Booking />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
