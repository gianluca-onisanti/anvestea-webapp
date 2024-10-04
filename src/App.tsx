import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SideMenu from './components/SideMenu';
import { Box } from '@mui/material';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;