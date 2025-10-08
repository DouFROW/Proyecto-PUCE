import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MobileNavbar from './components/MobileNavbar';

// Importar vistas existentes
import AdminDashboard from './views/AdminDashboard';
import MemberDashboard from './views/MemberDashboard';

// Importar las nuevas vistas
import DocumentsPage from './pages/DocumentsPage';
import LoansPage from './pages/LoansPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  const [currentView, setCurrentView] = useState('admin'); // 'admin' o 'member'
  const [activeNav, setActiveNav] = useState('dashboard'); // Vista activa en sidebar/navbar
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('lg'));

  // Cambiar entre vistas admin/member
  const handleViewSwitch = () => {
    setCurrentView(prev => (prev === 'admin' ? 'member' : 'admin'));
  };

  // Cambiar el contenido principal según la navegación
  const handleNavClick = (view) => {
    setActiveNav(view);
  };

  // Contenido central según la vista seleccionada
  const renderContent = () => {
    if (currentView === 'admin') {
      switch (activeNav) {
        case 'dashboard':
          return <AdminDashboard />;
        case 'documentos':
          return <DocumentsPage />;
        case 'prestamos':
          return <LoansPage />;
        case 'reportes':
          return <ReportsPage />;
        default:
          return <AdminDashboard />;
      }
    } else {
      switch (activeNav) {
        case 'dashboard':
          return <MemberDashboard />;
        case 'documentos':
          return <DocumentsPage />;
        case 'prestamos':
          return <LoansPage />;
        case 'reportes':
          return <ReportsPage />;
        default:
          return <MemberDashboard />;
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />

      {/* Barra superior */}
      <Navbar currentView={currentView} onSwitchView={handleViewSwitch} />

      {/* Sidebar (solo escritorio) */}
      {!isMobile && (
        <Sidebar
          activeNav={activeNav}
          onNavClick={handleNavClick}
          isAdmin={currentView === 'admin'}
        />
      )}

      {/* Contenedor principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, lg: 3 },
          pt: { xs: 10, lg: 12 }, // espacio para navbar fija
          ml: { lg: 30 }, // ancho del sidebar (~240px)
          backgroundColor: '#f5f5f5',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {renderContent()}
      </Box>

      {/* Navbar móvil (solo móvil/tablet) */}
      {isMobile && (
        <MobileNavbar
          activeNav={activeNav}
          onNavClick={handleNavClick}
          isAdmin={currentView === 'admin'}
        />
      )}
    </Box>
  );
}

export default App;
