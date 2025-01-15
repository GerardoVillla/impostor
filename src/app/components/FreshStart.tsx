import React from 'react';
import { Box, CardContent, CardMedia, Typography, Button } from '@mui/material';

const FreshStart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: 'auto',
        boxShadow: 3,
        padding: 5,
        backgroundColor: 'green',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <CardContent sx={{ padding: 2, color: 'white' }}>
        <Typography variant="h2" component="h2" gutterBottom>
          New Beginnings
        </Typography>
        <Typography variant="h5" color="white" sx={{ width: '100%' }}>
          It means recognizing that no one is born knowing everything, that experience is built over time, and that true progress lies in accepting our imperfections as an essential part of our growth. Instead of viewing our mistakes as failures, we can reinterpret them as lessons, as moments that push us to learn, reflect, and evolve.
        </Typography>
      </CardContent>
      
      <CardMedia
        component="img"
        image="./img/secure.png"
        alt="Fresh start"
        sx={{
          width: { xs: '100%', sm: 300 },
          height: 'auto',
          objectFit: 'cover',
        }}
        
      />
      
    </Box>
  );
}

export default FreshStart;