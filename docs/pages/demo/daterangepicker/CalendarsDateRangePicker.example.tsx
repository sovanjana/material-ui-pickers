import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField } from '@material-ui/core';
import { DateRangePicker, DateRange } from '@material-ui/pickers';

function CalendarsDateRangePicker() {
  const [selectedDate, handleDateChange] = React.useState<DateRange>([null, null]);

  return (
    <Grid container direction="column" alignItems="center">
      <Typography gutterBottom> 1 calendar </Typography>
      <DateRangePicker
        calendars={1}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        renderInput={props => <TextField {...props} />}
      />
      <Typography gutterBottom> 2 calendars</Typography>
      <DateRangePicker
        calendars={2}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        renderInput={props => <TextField {...props} />}
      />
      <Typography gutterBottom> 3 calendars</Typography>
      <DateRangePicker
        calendars={3}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        renderInput={props => <TextField {...props} />}
      />
    </Grid>
  );
}

export default CalendarsDateRangePicker;
