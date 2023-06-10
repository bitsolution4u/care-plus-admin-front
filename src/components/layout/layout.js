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
import { useEffect } from 'react';
import { BiCircle } from 'react-icons/bi';
import { IconButton } from '@mui/material';

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
  const [open, setOpen] = React.useState(true);
  const [activeModule, setActiveModule] = React.useState([]);
  const [activeSubModule, setActiveSubModule] = React.useState([]);
  const [activeInnerSubModule, setActiveInnerSubModule] = React.useState([]);
  const [sideBarPosition, setSideBarPosition] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  const widthFunc = React.useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      widthFunc();
      setOpen(false);
    };

    if (width < 960 && open) {
      setSideBarPosition(true);
    } else {
      setSideBarPosition(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, open, widthFunc]);
  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

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
        sx={{ position: `${sideBarPosition ? 'fixed' : 'inherit'}`, zIndex: 2 }}
        className="drawer-main-section"
        PaperProps={{
          sx: {
            backgroundColor: '#101618',
          },
        }}
      >
        <Box
          sx={{
            minHeight: '62px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Image src={logoImage} alt="logo" width={220} height={62} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              padding: 1,
              color: '#fff',
              display: `${open ? 'block' : 'none'}`,
            }}
          >
            <BiCircle />
          </IconButton>
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8, background: '#f8f7fa' }}
      >
        {children}
      </Box>
    </Box>
  );
}
