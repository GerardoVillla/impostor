// Footer.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0E1215',
        color: '#FFFFFF',
        padding: 3,
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} New Beginnings.
      </Typography>
    </Box>
  );
}

export default Footer;