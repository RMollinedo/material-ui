import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { minWidth } from "../ContactForm";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Dayjs } from "dayjs";

const popperSX = {
  //color: "yellow"
  "& .MuiPaper-root": {
    color: "yellow",
  },
  "& [role=grid]": {
    backgroundColor: "green",
    // "& button": {
    //   backgroundColor: "red"
    // }
    "& button": {
      backgroundColor: "blue",
    },
    "& button.MuiPickersDay-today": {
      backgroundColor: "orange",
    },
    "& button.Mui-disabled": {
      backgroundColor: "red",
    },
  },
};

interface Props {
  defaultValue: Dayjs | null | undefined;
  onChange: (value: string | null | undefined) => void;
}

export default function BeautifulDesktopDatePicker({ defaultValue, onChange }: Props): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        // @ts-ignore
        // for some reason defaultValue only accepts string values instead of accepting date values,
        // also it does not work with Date,
        // so to solve all of this we need to use Dayjs and use ts-ignore.
        defaultValue={defaultValue}
        onChange={onChange}
        disablePast
        label="Date"
        format="MM/DD/YYYY"
        views={["day"]}
        slotProps={{
          textField: {
            InputProps: {
              sx: { "& .MuiSvgIcon-root": { color: "primary.main" } },
            },
            sx: {
              minWidth: minWidth,
            },
          },
          popper: {
            sx: popperSX,
          },
        }}
        slots={{
          openPickerIcon: CalendarTodayIcon,
        }}
      />
    </LocalizationProvider>
  );
}
