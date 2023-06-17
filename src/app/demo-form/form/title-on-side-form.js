'use client';
import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import CustomTextField from 'src/@core/components/mui/text-field';

const SideTitleForm = () => {
  return (
    <div className="demo-form-main-page">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Box
            className="two-grid-form form-grid-shadow"
            sx={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <Grid item container alignItems="center" spacing={3}>
              <Grid item xs={4} md={3}>
                <p>Input Side label</p>
              </Grid>
              <Grid item xs={8} md={9}>
                <CustomTextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <p>Input Side label</p>
              </Grid>
              <Grid item xs={8} md={9}>
                <CustomTextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <p>Input Side label</p>
              </Grid>
              <Grid item xs={8} md={9}>
                <CustomTextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box sx={{ margin: '2em 0' }}>
              <Button
                variant="contained"
                color="success"
                sx={{ marginRight: '2em' }}
              >
                Submit
              </Button>
              <Button variant="contained" color="warning">
                Reset
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            className="two-grid-form form-grid-shadow"
            sx={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <Grid item container alignItems="center" spacing={3}>
              <Grid item xs={4} md={3}>
                <p>Input Side label</p>
              </Grid>
              <Grid item xs={8} md={9}>
                <CustomTextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <p>Input Side label</p>
              </Grid>
              <Grid item xs={8} md={9}>
                <CustomTextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4} md={3}>
                <p>Input Side label</p>
              </Grid>
              <Grid item xs={8} md={9}>
                <CustomTextField
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box sx={{ margin: '2em auto', textAlign: 'center' }}>
              <Button
                variant="contained"
                color="success"
                sx={{ marginRight: '2em' }}
              >
                Submit
              </Button>
              <Button variant="contained" color="warning">
                Reset
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideTitleForm;
