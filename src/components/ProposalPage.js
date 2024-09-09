import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ProposalPage({ onYes }) {
  const [showMessage, setShowMessage] = useState(false);

  const handleYesClick = () => {
    setShowMessage(true);
    onYes(); // Call the parent callback if needed
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f8ff', // Light background color
        textAlign: 'center',
        padding: '0 20px', // Internal padding
      }}
    >
      {!showMessage ? (
        <>
          <Typography variant="h4" component="h1" style={{ marginBottom: '20px' }}>
            Quieres ser mi novia?
          </Typography>
          <Button variant="contained" color="primary" onClick={handleYesClick}>
            Sí
          </Button>
        </>
      ) : (
        <Typography variant="h4" component="h1" style={{ marginTop: '20px' }}>
          Gracias, ya puede descargar su certificado.
        </Typography>
      )}
    </Box>
  );
}

export default ProposalPage;
