import style from "./Calendar.module.scss";

import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

const Calendar = ({onHide}) => {
  return (
    <>
    <div className="overlay" onClick={onHide}></div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar"]}>
        <DemoItem label="1 calendar">
          <DateRangeCalendar calendars={1} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    
    </>
  );
};

export default Calendar;
