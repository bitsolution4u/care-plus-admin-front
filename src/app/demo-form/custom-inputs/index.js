'use client';
// ** MUI Imports
import Grid from '@mui/material/Grid';

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet';

// ** Demo Components Imports
import CustomRadioBasic from './custom-inputs/CustomRadioBasic';
import CustomRadioIcons from './custom-inputs/CustomRadioIcons';

// ** Source code imports
import * as source from './custom-inputs/CustomInputsSourceCode';

const CustomInputs = () => {
  return (
    <Grid container spacing={6} className="match-height">
      <Grid item xs={12} lg={6}>
        <CardSnippet
          title="Custom Radios"
          code={{
            tsx: null,
            jsx: source.CustomRadioBasicJSXCode,
          }}
        >
          <CustomRadioBasic />
        </CardSnippet>
      </Grid>

      <Grid item xs={12} lg={6}>
        <CardSnippet
          title="Custom Radios with Icons"
          code={{
            tsx: null,
            jsx: source.CustomRadioIconsJSXCode,
          }}
        >
          <CustomRadioIcons />
        </CardSnippet>
      </Grid>
    </Grid>
  );
};

export default CustomInputs;
