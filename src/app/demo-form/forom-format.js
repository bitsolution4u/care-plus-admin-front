'use client';
import {
  Box,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const DemoFormPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="demo-form-main-page">
      <Box className="two-grid-form form-grid-shadow">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
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
            <TextField
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
            <TextField
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
          <Grid item xs={12} md={6}>
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
              <TextField
                id="outlined-basic"
                label="Outlined"
                fullWidth
                size="small"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">$</InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    borderRadius: '10px',
                  },
                  marginBottom: 2,
                  borderRadius: 5,
                }}
              />
              <TextField
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
              <TextField
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
              <TextField
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
              <TextField
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
              <TextField
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
              <TextField
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
              <TextField
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
