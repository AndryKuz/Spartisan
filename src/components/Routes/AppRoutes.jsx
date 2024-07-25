import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./index";

import Home from "../../Pages/Home";
import Gallery from "../../Pages/Gallery";
import Gift from '../../Pages/Gift';
import Booking from '../../Pages/Booking';
import About from '../../Pages/About';
import Payment from '../../Pages/Payment';
import NotFound from '../../Pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.GALLERY} element={<Gallery/>}/>
            <Route path={ROUTES.GIFT} element={<Gift/>}/>
            <Route path={ROUTES.BOOKING} element={<Booking/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
            <Route path={ROUTES.PAYMENT} element={<Payment/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
