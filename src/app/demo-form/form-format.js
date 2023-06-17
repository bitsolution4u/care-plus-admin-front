'use client';
import {
  Box,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomTextField from 'src/@core/components/mui/text-field';

const DemoFormPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // multi select
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="demo-form-main-page">
      <Box className="two-grid-form form-grid-shadow">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomTextField
              id="outlined-basic"
              label="Outlined"
              fullWidth
              size="small"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <CustomTextField
              id="filled-basic"
              label="Filled"
              fullWidth
              size="small"
              variant="filled"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
                '& .MuiInputBase-root': {
                  backgroundColor: '#acbbe582',
                },
              }}
            />

            <CustomTextField
              id="standard-basic"
              label="Standard"
              size="small"
              variant="standard"
              fullWidth
              sx={{
                marginBottom: 2,
                borderRadius: 5,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              id="outlined-basic"
              label="Input color changed"
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
              fullWidth
              sx={{
                marginBottom: 2,
                borderRadius: 5,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
                '& .MuiInputBase-input': {
                  color: 'red',
                },
              }}
            />
            <CustomTextField
              id="filled-basic"
              label="Filled"
              size="small"
              fullWidth
              variant="filled"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <CustomTextField
              id="standard-basic"
              label="Standard"
              fullWidth
              size="small"
              variant="standard"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="three-grid-form form-grid-shadow">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <CustomTextField
              id="outlined-basic"
              label="Outlined"
              fullWidth
              size="small"
              variant="outlined"
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
              sx={{
                '& .MuiInputBase-root': {
                  borderRadius: '10px',
                },
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <CustomTextField
              id="filled-basic"
              label="Filled"
              fullWidth
              size="small"
              variant="filled"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <CustomTextField
              id="standard-basic"
              label="Standard"
              size="small"
              variant="standard"
              fullWidth
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CustomTextField
              id="outlined-basic"
              label="Outlined"
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
              fullWidth
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <CustomTextField
              id="filled-basic"
              label="Filled"
              size="small"
              fullWidth
              variant="filled"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <CustomTextField
              id="standard-basic"
              label="Standard"
              fullWidth
              size="small"
              variant="standard"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CustomTextField
              id="outlined-basic"
              label="Outlined"
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
              fullWidth
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
            <FormControl sx={{ mb: 2, width: '100%' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                size="small"
                fullWidth
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <CustomTextField
              id="standard-basic"
              label="Standard"
              fullWidth
              size="small"
              variant="standard"
              sx={{
                marginBottom: 2,
                borderRadius: 5,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="grid-form-seperate ">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              padding: '2em',
              background: '#f3f3f3',
              borderRadius: 1,
            }}
          >
            <Box
              sx={{
                boxShadow: '0px 4px 18px 0px rgba(47, 43, 61, 0.1)',
                padding: '1.2em',
              }}
            >
              <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                  size="small"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel
                  sx={{ top: '-7px' }}
                  id="demo-simple-select-helper-label"
                >
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Age"
                  size="small"
                  sx={{
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#000',
                    },
                  }}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              padding: '2em',
              background: '#f3f3f3',
              borderRadius: 1,
            }}
          >
            <Box
              sx={{
                boxShadow: '0px 4px 18px 0px rgba(47, 43, 61, 0.1)',
                padding: '1.2em',
              }}
            >
              <CustomTextField
                id="outlined-basic"
                label="Outlined"
                size="small"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                }}
                fullWidth
                sx={{
                  marginBottom: 2,
                  borderRadius: 5,
                }}
              />
              <CustomTextField
                id="filled-basic"
                label="Filled"
                size="small"
                fullWidth
                variant="filled"
                sx={{
                  marginBottom: 2,
                  borderRadius: 5,
                }}
              />
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              padding: '2em',
              background: '#f3f3f3',
              borderRadius: 1,
            }}
          >
            <Box
              sx={{
                boxShadow: '0px 4px 18px 0px rgba(47, 43, 61, 0.1)',
                padding: '1.2em',
                borderRadius: '6px',
              }}
            >
              <CustomTextField
                id="outlined-basic"
                label="Outlined"
                size="small"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                }}
                fullWidth
                sx={{
                  marginBottom: 2,
                  borderRadius: 5,
                }}
              />
              <FormControl sx={{ mb: 2, width: '100%' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  size="small"
                  fullWidth
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <CustomTextField
                id="standard-basic"
                label="Standard"
                fullWidth
                size="small"
                variant="standard"
                sx={{
                  marginBottom: 2,
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DemoFormPage;
