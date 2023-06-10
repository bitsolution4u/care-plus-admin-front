'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppBar from './app-bar';
import LeftSideBar from './left-side-drawer';
import Image from 'next/image';
import logoImage from '../../assets/img/demo-logo.png';

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function LeftSideDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setOpen((prev) => !prev);
  };
  const [activeModule, setActiveModule] = React.useState([]);
  const [activeSubModule, setActiveSubModule] = React.useState([]);
  const [activeInnerSubModule, setActiveInnerSubModule] = React.useState([]);

  const handleActiveModule = (name) => {
    console.log({ name });
    if (activeModule.includes(name)) {
      setActiveModule([]);
    } else {
      setActiveModule([name]);
    }
    setActiveSubModule([]);
    setActiveInnerSubModule([]);
  };

  const handleActiveSubModule = (name) => {
    console.log({ name });
    if (activeSubModule.includes(name)) {
      setActiveSubModule([]);
    } else {
      setActiveSubModule([name]);
    }
  };
  const handleActiveInnerSubModule = (name) => {
    console.log({ name });
    if (activeInnerSubModule.includes(name)) {
      setActiveInnerSubModule([]);
    } else {
      setActiveInnerSubModule([name]);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        drawerWidth={drawerWidth}
      />
      <Drawer
        variant="permanent"
        open={open}
        className="drawer-main-section"
        PaperProps={{
          sx: {
            backgroundColor: '#101618',
          },
        }}
      >
        <Box
          sx={{ minHeight: '62px', display: 'flex', justifyContent: 'center' }}
        >
          <Image src={logoImage} alt="logo" width={220} height={62} />
        </Box>
        <Divider sx={{ borderColor: '#cbcbcb1f' }} />
        <LeftSideBar
          open={open}
          activeModule={activeModule}
          activeSubModule={activeSubModule}
          handleActiveModule={handleActiveModule}
          handleActiveSubModule={handleActiveSubModule}
          handleActiveInnerSubModule={handleActiveInnerSubModule}
          activeInnerSubModule={activeInnerSubModule}
        />
        <Divider sx={{ borderColor: '#cbcbcb1f' }} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader className="drawer-header" /> */}
        {children}
      </Box>
    </Box>
  );
}
