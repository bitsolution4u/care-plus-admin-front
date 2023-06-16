'use client';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Grid } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function DatePickerTypes() {
  return (
    <div className="demo-form-main-page">
      <div className="form-grid-shadow">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker orientation="landscape" />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={['DatePicker', 'DatePicker', 'DatePicker']}
              >
                <DatePicker
                  label={'"year", "month" and "day"'}
                  views={['year', 'month', 'day']}
                  sx={{
                    '& .MuiInputBase-root': {
                      borderRadius: '30px',
                    },
                    marginBottom: 2,
                    borderRadius: 5,
                    '& .MuiInputBase-input': {
                      height: '1em',
                    },
                  }}
                />
                <DatePicker label={'"day"'} views={['day']} />
                <DatePicker
                  label={'"month" and "year"'}
                  views={['month', 'year']}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
