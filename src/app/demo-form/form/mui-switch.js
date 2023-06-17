'use client';
import { Box, FormGroup, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

const MuiSwitch = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box sx={{ mt: 3 }}>
      <FormGroup>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Label Off</Typography>
          <AntSwitch
            defaultChecked
            inputProps={{ 'aria-label': 'ant design' }}
          />
          <Typography>Label On</Typography>
        </Stack>
      </FormGroup>
      <Switch
        checked={checked}
        color="warning"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Box>
  );
};

export default MuiSwitch;

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 20,
  padding: 0,
  borderRadius: 10,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 20,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 10,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
