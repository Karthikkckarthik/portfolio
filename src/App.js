import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material'; // Add this import
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#1e3a8a',
    },
    secondary: {
      main: '#10b981',
    },
    background: {
      default: '#f3f4f6',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ paddingTop: '64px' }}>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
        <Certifications />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;