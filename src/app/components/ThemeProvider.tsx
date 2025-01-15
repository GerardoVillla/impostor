// filepath: /src/components/ThemeProvider.jsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: 'dark', // o 'light'
    primary: {
      main: '#ec7d5a',
    },
    secondary: {
      main: '#ff5722',
    },
  },
});

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;