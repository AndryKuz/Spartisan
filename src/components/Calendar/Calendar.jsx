import { useDispatch } from "react-redux";
import * as React from "react";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";

import { addDate } from "../../features/booking/bookingSlice";

const Calendar = ({ onHide }) => {
  const dispatch = useDispatch();

  const handleDateChange = (newValue) => {
    const formattedDate = newValue.startOf('day').format('YYYY-MM-DD');
    dispatch(addDate(formattedDate));
    onHide();
  };
  return (
    <>
      <div className="overlay" onClick={onHide}></div>
      <div className="wrapperCalendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangeCalendar"]}>
            <DemoItem>
              <DateCalendar onChange={handleDateChange} />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;
