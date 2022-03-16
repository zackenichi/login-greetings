import { Button, Snackbar } from '@mui/material';
import React, { useState } from 'react';

const Greeting = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const greetingMessages = [
    'Make each day your masterpiece.',
    'Impossible is for the unwilling.',
    'Have a great day!',
    'Believe you can and you’re halfway there.',
    'Keep going. Be all in.',
    'The journey of a thousand miles begins with a single step.',
    'Good things happen to those who hustle.',
    'You can if you think you can.',
    'Always do what you are afraid to do.',
    'It always seems impossible until it’s done.',
  ];

  const handleRandomMessage = () => {
    let randomMessage =
      greetingMessages[Math.floor(Math.random() * greetingMessages.length)];
    setSnackbarMessage(randomMessage);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleOpenSnackbar = () => {
    handleRandomMessage();
    setOpenSnackbar(true);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: '#F50157',
          textAlign: 'center',
          textTransform: 'none',
          fontSize: '20px',
          paddingLeft: '20px',
          paddingRight: '20px',
          '&:hover': {
            background: '#33658A',
          },
        }}
        onClick={handleOpenSnackbar}
      >
        Get greeting
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </>
  );
};

export default Greeting;
