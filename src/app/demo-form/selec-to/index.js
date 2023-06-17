'use client';
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const colourOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'orange', label: 'Orange' },
  // Additional color options...
];

const SelectTo = () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const animatedComponents = makeAnimated();
  return (
    <div className="demo-form-main-page">
      <div className="form-grid-shadow">
        <Typography variant="h5" component="p">
          Select to component
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={colourOptions[0]}
              isClearable={isClearable}
              isSearchable={isSearchable}
              name="color"
              options={colourOptions}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[colourOptions[0], colourOptions[3]]}
              isMulti
              options={colourOptions}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SelectTo;
