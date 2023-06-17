'use client';
// ** Next Import
import Link from 'next/link';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet';

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';

// ** Demo Components Imports

// ** Source code imports
import * as source from './pickers/PickersSourceCode';
import PickersBasic from './pickers/PickersBasic';
import PickersMinMax from './pickers/PickersMinMax';
import PickersSpecificRange from './pickers/PickersSpecificRange';
import PickersCallbacks from './pickers/PickersCallbacks';
import PickersCustomization from './pickers/PickersCustomization';
import PickersIncludeExclude from './pickers/PickersIncludeExclude';
import PickersLocale from './pickers/PickersLocale';

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const ReactDatePicker = () => {
  // ** Hook
  const theme = useTheme();
  const { direction } = theme;
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end';

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardSnippet
            title="Date Pickers"
            code={{ tsx: null, jsx: source.PickersBasicJSXCode }}
          >
            <PickersBasic popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>

        <Grid item xs={12}>
          <CardSnippet
            title="Min & Max Pickers"
            code={{ tsx: null, jsx: source.PickersMinMaxJSXCode }}
          >
            <PickersMinMax popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>

        <Grid item xs={12}>
          <CardSnippet
            title="Specific Range"
            code={{ tsx: null, jsx: source.PickersSpecificRangeJSXCode }}
          >
            <PickersSpecificRange popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Callbacks"
            code={{ tsx: null, jsx: source.PickersCallbacksJSXCode }}
          >
            <PickersCallbacks popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Customization"
            code={{ tsx: null, jsx: source.PickersCustomizationJSXCode }}
          >
            <PickersCustomization popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Include Exclude"
            code={{ tsx: null, jsx: source.PickersIncludeExcludeJSXCode }}
          >
            <PickersIncludeExclude popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <CardSnippet
            title="Locale"
            code={{ tsx: null, jsx: source.PickersLocaleJSXCode }}
          >
            <PickersLocale popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        {/* <Grid item xs={12}>
          <CardSnippet
            title="Month & Year Dropdowns"
            code={{ tsx: null, jsx: source.PickersMonthYearDropdownsJSXCode }}
          >
            <PickersMonthYearDropdowns popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Month, Year & Quarter"
            code={{ tsx: null, jsx: source.PickersMonthYearQuarterJSXCode }}
          >
            <PickersMonthYearQuarter popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title="Options"
            code={{ tsx: null, jsx: source.PickersOptionsJSXCode }}
          >
            <PickersOptions popperPlacement={popperPlacement} />
          </CardSnippet>
        </Grid> */}
      </Grid>
    </DatePickerWrapper>
  );
};

export default ReactDatePicker;
