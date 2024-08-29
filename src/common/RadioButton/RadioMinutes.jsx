import { createTheme, ThemeProvider } from "@mui/material/styles";

import style from './RadioButton.module.scss';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "var(--gold)", 
          },
          "&.Mui-checked::before": {
            backgroundColor: "var(--gray)", 
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            borderRadius: "50%",
          },
          position: "relative",
          backgroundColor: "var(--gray)", 
          borderRadius: "50%",
          padding: "0px",
          marginRight:'10px'
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "300",
        },
      },
    },
  },
});

const RadioMinutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="minutes"
          defaultValue="60"
        >
          <FormControlLabel value="60" control={<Radio />} label="60 minutes" />
          <FormControlLabel
            value="120"
            control={<Radio />}
            label="120 minutes"
            className={style.secondRadio}
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export default RadioMinutes;
