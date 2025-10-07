import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar.js';
import MobileNavbar from './components/MobileNavbar';
import AdminDashboard from './views/AdminDashboard';
import MemberDashboard from './views/MemberDashboard';

function App() {
  const [currentView, setCurrentView] = useState('admin'); // 'admin' or 'member'
  const [activeNav, setActiveNav] = useState('dashboard'); // For sidebar/mobile nav
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const handleViewSwitch = () => {
    setCurrentView(prev => (prev === 'admin' ? 'member' : 'admin'));
  };

  const handleNavClick = (view) => {
    setActiveNav(view);
    // Simulate navigation (in real app, route to view)
    alert(`Navegando a: ${view}`);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar currentView={currentView} onSwitchView={handleViewSwitch} />
      {!isMobile && (
        <Sidebar activeNav={activeNav} onNavClick={handleNavClick} isAdmin={currentView === 'admin'} />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, lg: 3 },
          pt: { xs: 10, lg: 12 }, // Account for fixed navbar
          ml: { lg: 30 }, // Sidebar width (250px ~ 30 * 8.33)
          backgroundColor: '#f5f5f5',
        }}
      >
        {currentView === 'admin' ? (
          <AdminDashboard activeNav={activeNav} />
        ) : (
          <MemberDashboard activeNav={activeNav} />
        )}
      </Box>
      {isMobile && (
        <MobileNavbar activeNav={activeNav} onNavClick={handleNavClick} isAdmin={currentView === 'admin'} />
      )}
    </Box>
  );
}

export default App;
