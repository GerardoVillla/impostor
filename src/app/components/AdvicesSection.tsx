import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

interface Advice {
  id: number;
  title: string;
  description: string;
  color: string;
}

const AdvicesSection: React.FC = () => {
  const advices: Advice[] = [
    {
		id: 1,
		title: 'Recognize Your Achievements',
		description: 'Tómate el tiempo para reflexionar sobre tus éxitos y reconoce el esfuerzo que pusiste para lograrlos.',
		color: '#FFD700',
	  },
	  {
		id: 2,
		title: 'Talk About Your Feelings',
		description: 'Compartir tus dudas y miedos con amigos, familiares o colegas puede ayudarte a ver las cosas desde otra perspectiva.',
		color: '#87CEFA',
	  },
	  {
		id: 3,
		title: 'Accept Compliments',
		description: 'Cuando alguien te felicita, acepta el cumplido en lugar de rechazarlo o minimizarlo.',
		color: '#90EE90',
	  },
	  {
		id: 4,
		title: 'Set Realistic Goals',
		description: 'Fija objetivos alcanzables y celebra cada pequeño paso que das hacia ellos.',
		color: '#FFB6C1', 
	  },
	];

  return (
    <Box position="relative" sx={{ padding: 5, zIndex: 1, py: 20 }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
	  Tips to Overcome Imposter Syndrome
      </Typography>
      <Grid container spacing={4}>
        {advices.map(advice => (
          <Grid item xs={12} sm={6} md={3} key={advice.id}>
            <Card sx={{ backgroundColor: advice.color, height: '100%', py: 3 }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {advice.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {advice.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdvicesSection;