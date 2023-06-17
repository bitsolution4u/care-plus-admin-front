'use client';
// ** Next Import
import Link from 'next/link';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet';

// ** Styled Component
import CleaveWrapper from 'src/@core/styles/libs/react-cleave';

// ** Example Import

// ** Source code imports
import * as source from './input-mask/InputMaskSourceCode';
import InputMaskExamples from './input-mask/InputMaskExamples';
import { Box } from '@mui/material';

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const InputMask = () => {
  return (
    <Box sx={{ my: 3 }}>
      <CleaveWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <CardSnippet
              title="Input Masks"
              code={{
                tsx: null,
                jsx: source.InputMaskExamplesJSXCode,
              }}
            >
              <InputMaskExamples />
            </CardSnippet>
          </Grid>
        </Grid>
      </CleaveWrapper>
    </Box>
  );
};

export default InputMask;
