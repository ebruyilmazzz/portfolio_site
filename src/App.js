import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </main>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
