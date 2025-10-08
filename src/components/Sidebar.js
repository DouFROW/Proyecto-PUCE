import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const drawerWidth = 260;


function Sidebar({ activeNav, onNavClick, isAdmin }) {
  // Vistas principales
  const navItems = [
    { icon: HomeIcon, label: 'Inicio', view: 'dashboard' },
    { icon: DescriptionIcon, label: 'Documentos', view: 'documentos' }, // ← cambio aquí
    { icon: AccountBalanceIcon, label: 'Préstamos', view: 'prestamos' }, // ← y aquí
    { icon: BarChartIcon, label: 'Reportes', view: 'reportes' }, // ← y aquí
  ];

  // Vistas extra para admin
  const adminItems = [
    { icon: MonetizationOnIcon, label: 'Contabilidad', view: 'contabilidad' },
    { icon: GroupIcon, label: 'Socios', view: 'socios' },
    { icon: SupervisorAccountIcon, label: 'Administración', view: 'administracion' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0056b3',
          color: 'white',
          pt: 8,
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.view}
            selected={activeNav === item.view}
            onClick={() => onNavClick(item.view)}
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mx: 1,
              my: 0.5,
              borderRadius: 1,
              transition: 'all 0.2s',
              '&:hover, &.Mui-selected': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
                transform: 'translateX(4px)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}

        {isAdmin && (
          <>
            {adminItems.map((item) => (
              <ListItem
                key={item.view}
                selected={activeNav === item.view}
                onClick={() => onNavClick(item.view)}
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  mx: 1,
                  my: 0.5,
                  borderRadius: 1,
                  transition: 'all 0.2s',
                  '&:hover, &.Mui-selected': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </>
        )}
      </List>
    </Drawer>
  );
}

export { Sidebar };
export default Sidebar;
