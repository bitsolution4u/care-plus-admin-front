import React from 'react';
import DemoFormPage from './form-format';
import DatePickerTypes from './date-picker';
import SideTitleForm from './title-on-side-form';
import TextOnTopForm from './text-on-top-form';
import PhotEditorMain from './photo-editor';

const page = () => {
  return (
    <div>
      <DemoFormPage />
      <SideTitleForm />
      <TextOnTopForm />
      <PhotEditorMain />
      <DatePickerTypes />
    </div>
  );
};

export default page;
