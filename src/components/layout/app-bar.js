'use client';
import { IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { LuCircleDot } from 'react-icons/lu';

const AppBar = ({ handleDrawerOpen, drawerWidth, open }) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor: '#101618' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            display: `${open ? 'none' : 'block'}`,
          }}
        >
          <LuCircleDot />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{ cursor: 'pointer' }}
        >
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBar;
