import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

function FinalStep() {
  return (
    <div className="final-step">
      <Typography variant="h5" component="h2" gutterBottom>
        Do you want to be my girlfriend?
      </Typography>
      <div style={{ marginTop: '20px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SentimentVerySatisfiedIcon />}
          style={{ marginRight: '10px' }}
        >
          Yes
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          startIcon={<SentimentDissatisfiedIcon />}
        >
          No
        </Button>
      </div>
    </div>
  );
}

export default FinalStep;
