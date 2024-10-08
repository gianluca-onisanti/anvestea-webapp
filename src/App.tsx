import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SideMenu from './components/SideMenu';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e : any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);   


    // Remove o event listener quando o componente for desmontado
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
    <div className='light'
      style={{ left: `${position.x}px`, top: `${position.y}px` }}>
    </div>
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