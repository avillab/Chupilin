import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const images = [
  '/images/rigoberto.JPG',
  '/images/yochikis.jpg',
  '/images/image5.jpg',
  '/images/image2.jpg',
  '/images/rigoychikis.jpg',
];

function MemoryGame({ onGameComplete }) {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  useEffect(() => {
    // Initialize the cards by doubling the images and shuffling
    const doubledImages = [...images, ...images];
    const shuffledCards = doubledImages.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index) || flippedIndices.includes(index)) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    if (newFlippedIndices.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndices;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
      }
      setTimeout(() => {
        setFlippedIndices([]);
      }, 1000);
    }

    if (matchedIndices.length + 2 === cards.length) {
      setTimeout(onGameComplete, 1000); // Trigger game completion
    }
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        A ver chikis, que tan buena memoria tienes
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={4} key={index}>
            <Card onClick={() => handleCardClick(index)}>
              {flippedIndices.includes(index) || matchedIndices.includes(index) ? (
                <CardMedia
                  component="img"
                  image={card}
                  alt="Memory card"
                  style={{ width: '100%', height: '100px' }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: 'grey.300',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6">?</Typography>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MemoryGame;
