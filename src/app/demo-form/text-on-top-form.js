'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { blue, green, pink } from '@mui/material/colors';
import React from 'react';
import MuiSwitch from './mui-switch';

const TextOnTopForm = () => {
  return (
    <div className="demo-form-main-page">
      <Box className="two-grid-form form-grid-shadow">
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: '700', mb: 3 }}
        >
          Form with Text on Top
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
              <InputLabel
                htmlFor="outlined-textarea"
                sx={{
                  position: 'relative',
                  top: -18,
                  left: -12,
                  color: '#000',
                }}
              >
                Multiline
              </InputLabel>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                size="small"
              />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
              <InputLabel
                htmlFor="outlined-textarea"
                sx={{
                  position: 'relative',
                  top: -18,
                  left: -12,
                  color: '#000',
                }}
              >
                Multiline
              </InputLabel>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                size="small"
              />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
              <InputLabel
                htmlFor="outlined-textarea"
                sx={{
                  position: 'relative',
                  top: -18,
                  left: -12,
                  color: '#000',
                }}
              >
                Multiline
              </InputLabel>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
              <InputLabel
                htmlFor="outlined-textarea"
                sx={{ position: 'relative', top: -18, left: -12 }}
              >
                Multiline
              </InputLabel>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                size="small"
              />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
              <InputLabel
                htmlFor="outlined-textarea"
                sx={{ position: 'relative', top: -18, left: -12 }}
              >
                Multiline
              </InputLabel>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                size="small"
              />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
              <InputLabel
                htmlFor="outlined-textarea"
                sx={{ position: 'relative', top: -18, left: -12 }}
              >
                Multiline
              </InputLabel>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                size="small"
              />
            </FormControl>
          </Grid>
        </Grid>

        <Box>
          <FormGroup>
            <FormControlLabel
              required
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                    },
                  }}
                />
              }
              label="Select Item "
            />
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </FormGroup>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[600],
                      },
                    }}
                  />
                }
                label="Female"
                sx={{
                  color: green[800],
                }}
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[600],
                      },
                    }}
                  />
                }
                label="Other"
                sx={{
                  color: green[800],
                }}
              />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
          <MuiSwitch />
        </Box>
        <Box sx={{ margin: '2em 0', textAlign: 'center' }}>
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
    </div>
  );
};

export default TextOnTopForm;
