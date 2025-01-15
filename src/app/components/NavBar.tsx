import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface MenuItem {
    name: string;
    path: string;
}


const Navbar: React.FC = () => {

    const menuItems: MenuItem[] = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
    ];


    return (
        <>
            <Box position='sticky' sx={{ display: 'flex', justifyContent: 'center', mt: 2, top: 15, zIndex: 100 }}>
                <AppBar position="sticky" sx={{ 
                    zIndex: 5, 
                    color: 'white', 
                    backgroundColor: '#0E1215',
                    borderRadius: '25px',
                    width: '80%',
                    paddingX: 3,
                    border: 1,
                    }}>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            New Beginnings
                        </Typography>
                        <Box sx={{ display: 'block' }}>
                            {menuItems.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    <Button color="inherit">{item.name}</Button>
                                </Link>
                                
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;