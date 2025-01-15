import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface PhraseCarouselProps {
    phrases: string[];
    interval?: number; // Interval in milliseconds
}

const PhraseCarousel: React.FC<PhraseCarouselProps> = ({ phrases, interval = 4000 }) => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, interval);

        return () => clearInterval(timer);
    }, [phrases.length, interval]);

    return (
        <Box
            sx={{
                position: 'relative',
                width: 'auto',
                minHeight: '20vh',
                backgroundColor: '#83c5be',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 4,
                color: '#FFFF',
                zIndex:1,
            }}
        >
            <Typography variant="h4" component= "h2" gutterBottom>
                {"\"   "+phrases[currentPhraseIndex]+"   \""}
            </Typography>
            
        </Box>
    );
};

export default PhraseCarousel;