import React from 'react';
import {Card, CardMedia, CardContent, Typography, Button, Box, Container, colors } from '@mui/material';
import A from '@mui/material/Button';
interface MoreInformationCardProps {
	image: string;
	title: string;
	description: string;
	link: string;
}

const MoreInformationCard: React.FC<MoreInformationCardProps> = ({
	image,
	title,
	description,
	link
}) => {
	return (
		<Card
			sx={{
				minWidth: 300,
				maxWidth: 345,
				m: 2,
				backgroundColor: '#0E1215',
				color: '#FFFFFF',
				boxShadow: 3,
				borderRadius: 2,
				border: 1,
				display: 'flex',
				flexDirection: 'column',
				height: 'auto',
				position: 'relative',
				zIndex: 1,
			}}
		>
			<CardMedia
				component="img"
				image={image}
				alt={title}
				sx={{
					minHeight: 200,
					objectFit: 'cover',
					borderTopLeftRadius: 2,
					borderTopRightRadius: 2,
				}}
			/>
			<CardContent
				sx={{
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					minHeight: 237,
					padding: 2,
				}}
			>
				<div>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2">
						{description}
					</Typography>
				</div>
				<A
					variant="contained"
					color="primary"
					sx={{ mt: 2 }}
					href={link}
					target='_blank'
					aria-label={`Navigate to ${title} page`}
				>
					Go to link
				</A>
			</CardContent>
		</Card>
	);
}

interface SectionProps {
	cards: MoreInformationCardProps[];
}

const MoreInformationSection: React.FC<SectionProps> = ({ cards }) => {
	return (
		<Container sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			minHeight: '100vh',
			color: '#FFFF',
			position: 'relative',
			zIndex: 1
		}}>
			<Typography variant='h2' component="h1" gutterBottom>You can get more information at:</Typography>
			<Box sx={{
				mt: 7,
				display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: 'auto', backgroundColor: '#0000', color: '#FFFF'
			}}>
				{cards.map((card, index) => (
					<MoreInformationCard
						key={index}
						image={card.image}
						title={card.title}
						description={card.description}
						link={card.link}
					/>
				))}
			</Box>
		</Container>
	);
}

export default MoreInformationSection;