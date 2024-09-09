import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CertificatePage() {
  const handleDownload = () => {
    // URL of the image
    const imageUrl = '/images/certificado.jpg';

    // Fetch the image and convert it to a Blob
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'certificadoDeAmor.jpg'; // The name the image will have when downloaded
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(link.href); // Clean up
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading the image:', error));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Tu certificado
      </Typography>
      <Typography variant="body1" gutterBottom>
        Un certificado para que quede por siempre
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Descargar certificado
      </Button>
    </div>
  );
}

export default CertificatePage;
