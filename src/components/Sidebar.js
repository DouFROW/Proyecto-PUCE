import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import {
  Home, Description, AccountBalance, BarChart, Calculator, People, Settings
} from '@mui/icons-material';
import CalculateIcon from '@mui/icons-material/Calculate';

const drawerWidth = 250;

function Sidebar({ activeNav, onNavClick, isAdmin }) {
  const theme = useTheme();

  // Define icon components directly to avoid JSX transformation issues
  const HomeIcon = () => <Home />;
  const DescriptionIcon = () => <Description />;
  const AccountBalanceIcon = () => <AccountBalance />;
  const BarChartIcon = () => <BarChart />;
  const PeopleIcon = () => <People />;
  const SettingsIcon = () => <Settings />;

  const navItems = [
    { icon: HomeIcon, label: 'Inicio', view: 'dashboard' },
    { icon: DescriptionIcon, label: 'Documentos', view: 'documents' },
    { icon: AccountBalanceIcon, label: 'Préstamos', view: 'loans' },
    { icon: BarChartIcon, label: 'Reportes', view: 'reports' },
  ];

  const adminItems = [
    { icon: CalculateIcon, label: 'Contabilidad', view: 'accounting' },
    { icon: PeopleIcon, label: 'Socios', view: 'members' },
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
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          pt: 8,
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            component="button"
            key={item.view}
            selected={activeNav === item.view}
            onClick={() => onNavClick(item.view)}
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mx: 0.5,
              borderRadius: 1,
              '&:hover, &.Mui-selected': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {isAdmin && adminItems.map((item) => (
          <ListItem
            component="button"
            key={item.view}
            selected={activeNav === item.view}
            onClick={() => onNavClick(item.view)}
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mx: 0.5,
              borderRadius: 1,
              '&:hover, &.Mui-selected': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'white',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

// Named export in addition to default export
export { Sidebar };
export default Sidebar;
