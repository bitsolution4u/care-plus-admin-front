'use client';
import { Box, Button } from '@mui/material';
import React from 'react';
import TransitionsModal from './modal';
import AlertDialog from './dialog-box';

const ModalAndDialogBox = () => {
  const [open, setOpen] = React.useState(false);
  const [diaOpne, setDiaOpne] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleDialOpne = () => setDiaOpne(true);
  const handleDiaClose = () => setDiaOpne(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="demo-form-main-page">
      <div className="form-grid-shadow">
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="success"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            Open modal
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleDialOpne}>
            Open alert dialog
          </Button>
        </Box>
        <TransitionsModal handleClose={handleClose} open={open} />
        <AlertDialog handleClose={handleDiaClose} open={diaOpne} />
      </div>
    </div>
  );
};

export default ModalAndDialogBox;
