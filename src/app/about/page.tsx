'use client'
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Navbar from "../components/NavBar";
import Wallpaper from "../components/Wallpaper";

export default function About() {
	return (
		<>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '80vh',
				width: '100%',
				backgroundColor: '#0E1215',
				color: '#FFFFFF',
				zIndex: 1,
				position: 'relative',
			}}>
				<Typography variant="h2" sx={{
					marginBottom: '20px',
					
				}}>About</Typography>
				<Box sx={{px: 2}}>
					<Typography variant="h3">This project was made in the GitHub Copilot 1-Day Build Challenge by @GerardoVillla</Typography>
				</Box>
			</Box>
		</>
	);
}