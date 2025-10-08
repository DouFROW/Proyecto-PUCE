import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import Groups2Icon from '@mui/icons-material/Groups2';
import CalculateIcon from '@mui/icons-material/Calculate';

const drawerWidth = 260;


function Sidebar({ activeNav, onNavClick, isAdmin }) {
  

  // Using imported icons directly

  // Common navigation items for both admin and members
  const navItems = [
    { icon: HomeIcon, label: 'Inicio', view: "co" },
    { icon: DescriptionIcon, label: 'Documentos', view: 'documents' },
    { icon: AccountBalanceIcon, label: 'Préstamos', view: 'loans' },
    { icon: BarChartIcon, label: 'Reportes', view: 'reports' },
  ];

  // Admin-specific navigation items
  const adminItems = [
    { icon: CalculateIcon, label: 'Contabilidad', view: 'accounting' },
    { icon: Groups2Icon, label: 'Socios', view: 'members' },
    { icon: SettingsIcon, label: 'Administración', view: 'admin' },
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
          backgroundColor: '#0056b3', // PUCESE blue from ROLES file
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
};

// Named export in addition to default export
export { Sidebar };
export default Sidebar;