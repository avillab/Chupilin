import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ContentPage({ content, onNext }) {
  return (
    <Box
      style={{
        padding: '40px 20px',
        margin: '20px auto',
        maxWidth: '500px',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {content.image && (
        <img src={content.image} alt="Content" style={{ maxWidth: '100%', marginBottom: '20px' }} />
      )}
      {content.text && (
        <Typography variant="body1" component="p" style={{ marginBottom: '20px' }}>
          {content.text}
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={onNext}>
        Siguiente
      </Button>
    </Box>
  );
}

export default ContentPage;
