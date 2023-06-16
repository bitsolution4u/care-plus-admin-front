'use client';
import React, { useState } from 'react';
import Select from 'react-select';

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
  return (
    <div className="demo-form-main-page">
      <div className="form-grid-shadow">
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          /* isDisabled={isDisabled}
          isLoading={isLoading}
          
          isRtl={isRtl}  */
          isClearable={isClearable}
          isSearchable={isSearchable}
          name="color"
          options={colourOptions}
        />
      </div>
    </div>
  );
};

export default SelectTo;
