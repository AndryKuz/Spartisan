import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { useState } from "react";

const Calendar = ({ onHide }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    onHide();
  };
  return (
    <>
      <div className="overlay" onClick={onHide}></div>
      <div className="wrapperCalendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangeCalendar"]}>
            <DemoItem>
            <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;
