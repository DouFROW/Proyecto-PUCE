import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Description, AccountBalance, BarChart, Groups, AdminPanelSettings } from '@mui/icons-material';

const MobileNavbar = ({ activeNav, onNavClick, isAdmin }) => {
  // Items según tipo de usuario
  const navItems = isAdmin
    ? [
        { label: 'Inicio', icon: Home, view: 'dashboard' },
        { label: 'Documentos', icon: Description, view: 'documentos' },
        { label: 'Préstamos', icon: AccountBalance, view: 'prestamos' },
        { label: 'Reportes', icon: BarChart, view: 'reportes' },
        { label: 'Contabilidad', icon: AccountBalance, view: 'contabilidad' },
        { label: 'Socios', icon: Groups, view: 'socios' },
        { label: 'Administración', icon: AdminPanelSettings, view: 'administracion' },
      ]
    : [
        { label: 'Inicio', icon: Home, view: 'dashboard' },
        { label: 'Documentos', icon: Description, view: 'documentos' },
        { label: 'Préstamos', icon: AccountBalance, view: 'prestamos' },
        { label: 'Reportes', icon: BarChart, view: 'reportes' },
      ];

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'white',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
    }}>
      <BottomNavigation
        value={activeNav}
        onChange={(event, newValue) => onNavClick(newValue)}
        showLabels
        sx={{ p: 1, justifyContent: 'space-around' }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.view}
            label={item.label}
            value={item.view}
            icon={<item.icon />}
            sx={{
              color: activeNav === item.view ? 'primary.main' : 'text.secondary',
              minWidth: 'auto',
              '& .MuiBottomNavigationAction-label': { fontSize: '0.8rem' },
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default MobileNavbar;
