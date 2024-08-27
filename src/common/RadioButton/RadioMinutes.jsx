import { createTheme, ThemeProvider } from "@mui/material/styles";
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
            color: "var(--gold)", // Цвет иконки внутри радио-кнопки, когда выбрана
          },
          "&.Mui-checked::before": {
            backgroundColor: "var(--gray)", // Цвет фона радио-кнопки, когда выбрана
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
          backgroundColor: "var(--gray)", // Цвет фона радио-кнопки по умолчанию
          borderRadius: "50%",
          padding: "3px",
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
          />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};

export default RadioMinutes;
