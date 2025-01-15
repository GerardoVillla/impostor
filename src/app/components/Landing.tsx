'use client'
import React from 'react';
import Wallpaper from './Wallpaper';
import Navbar from './NavBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhraseCarousel from './PhraseCarousel';
import AchievementChat from './AchievementChat';
import Divider from '@mui/material/Divider';
import FreshStart from './FreshStart';
import MoreInformationSection from './MoreInformationCard';
import TestInformationSection from './TestInformationSection';
import Footer from './Footer';
import A from '@mui/material/Button';
import CasesSection from './CasesSection';
import AdvicesSection from './AdvicesSection';
export const Landing = () => {
	const phrases: string[] = [
		"You belong here: Every great idea starts with doubt, but it's your courage to create that defines you—not your inner critic",
		"Believe in yourself and all that you are",
		"Your potential is endless",
		"Embrace your uniqueness",
		"Don't let fear hold you back",
		"You are capable of amazing things",
		"Trust the process",
		"Push your limits",
		"Stay focused and never give up",
		"Success starts with self-belief"
	
	];
		const cards = [
		{
			image: './img/art1.jpg',
			title: 'Imposter Syndrome: The Truth About Feeling Like a Fake	',
			description: 'Learn how to recognize and overcome Imposter Syndrome',
			link: "https://asm.org/articles/2020/august/imposter-syndrome-the-truth-about-feeling-like-a-f"
		},
		{
			image: './img/goals.svg',
			title: 'Setting Goals',
			description: 'Discover the power of setting goals and how to achieve them',
			link: "https://inside.ewu.edu/calelearning/psychological-skills/goal-setting/"
		},
		{
			image: './img/confidence.jpg',
			title: 'Building Confidence',
			description: 'Learn how to build confidence and believe in yourself',
			link: 'https://hbr.org/2021/08/how-to-build-confidence-at-work'
		}
	]
	return (
		<>
			<div className='flex flex-col items-center justify-center bg-black text-white'>
				<div className='z-10'>

					<Box
						sx={{
							width: '100%',
							minHeight: '73vh',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							padding: 5,
							color: '#fff',
							position: 'relative',
							zIndex: 10,
						}}
					>
						<Typography variant="h2" component="h1" gutterBottom>
							Understanding Imposter Syndrome
						</Typography>
						<Typography variant="h5" component="p" sx={{ maxWidth: 600, marginTop: 2 }}>
							Imposter Syndrome is a psychological pattern where individuals doubt their accomplishments and have a persistent fear of being exposed as a "fraud." Recognizing its impact is the first step towards overcoming it.
						</Typography>
						<A variant="contained" color="primary" sx={{ marginTop: 5 }} href="https://impostorsyndrome.com/about/" target='_blank'>
							Learn More
						</A>
					</Box>
					<PhraseCarousel phrases={phrases} />
					<CasesSection />
					<TestInformationSection />
					<AdvicesSection />
					<FreshStart />
					<MoreInformationSection cards={cards} />
					<Footer />
				</div>
			</div>
		</>
	);
}