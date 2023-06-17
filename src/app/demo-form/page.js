import React from 'react';

import DatePickerTypes from './date-picker/date-picker';

import PhotEditorMain from './photo-editor';
import ModalAndDialogBox from './modal-and-dialog';
import SelectTo from './selec-to';
import DemoFormPage from './form/form-format';
import SideTitleForm from './form/title-on-side-form';
import TextOnTopForm from './form/text-on-top-form';
import InputMask from './input-mask';
import CustomInputs from './custom-inputs';

const page = () => {
  return (
    <div>
      <DemoFormPage />
      <SideTitleForm />
      <TextOnTopForm />
      <PhotEditorMain />
      <DatePickerTypes />
      <SelectTo />
      <InputMask />
      <CustomInputs />
      <ModalAndDialogBox />
    </div>
  );
};

export default page;
