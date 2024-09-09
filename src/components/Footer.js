import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: 'rgb(68, 117, 74)', // Green color
        color: 'white',
        padding: '2px 0', // Make the footer thinner
        textAlign: 'center',
        zIndex: 1000, // Ensure it's on top of other content
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 5px' }}>Home</Link> | 
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 5px' }}>About</Link> | 
        <Link to="/certificate" style={{ color: 'white', textDecoration: 'none', margin: '0 5px' }}>Certificate</Link>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
        Date: {new Date().toLocaleDateString()}
      </Typography>
    </Box>
  );
}

export default Footer;
