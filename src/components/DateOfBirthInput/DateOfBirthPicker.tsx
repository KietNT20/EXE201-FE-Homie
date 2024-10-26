import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

interface DateOfBirthPickerProps {
  onChange?: (date: Date | null) => void;
}

const DateOfBirthPicker = ({ onChange }: DateOfBirthPickerProps) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [error, setError] = useState<string | null>(null);

  const minDate = dayjs().subtract(100, 'year');
  const maxDate = dayjs().subtract(15, 'year');

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);

    if (newValue) {
      if (newValue.isAfter(maxDate)) {
        setError('Must be at least 15 years old');
      } else if (newValue.isBefore(minDate)) {
        setError('Must be less than 100 years old');
      } else {
        setError(null);
        onChange && onChange(newValue.toDate());
      }
    } else {
      setError(null);
      onChange && onChange(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    </LocalizationProvider>
  );
};

export default DateOfBirthPicker;
