import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { CardMedia } from '@mui/material';
const CasesSection = () => {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: {xs: 'column', sm: 'row'},
			alignItems: 'center',
			position: 'relative',
			backgroundColor: 'purple',
			zIndex: 1,
			width: 'auto'
		}}>
			<CardMedia
				component="img"
				image="./img/impostor.png"
				alt="Fresh start"
				sx={{
					width: { xs: '100%', sm: 400 },
					height: 'auto',
					objectFit: 'cover',
				}}
			/>
			<Box sx={{
				mx: 10,
			}}>
				<Typography variant='h4' component='h2'>
				Did you know that 70% of people have felt at some point that they don’t deserve their achievements, according to the study The Impostor Phenomenon? Even figures like Neil Armstrong, Michelle Obama, Jennifer Lopez, and Kate Winslet have shared experiencing this feeling in their lives.</Typography>
			</Box>
		</Box>
	);
}

export default CasesSection;