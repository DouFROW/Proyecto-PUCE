import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CancelIcon from '@mui/icons-material/Cancel';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReceiptIcon from '@mui/icons-material/Receipt';


const drawerWidth = 260;

function Sidebar({ activeNav, onNavClick, isAdmin }) {
  const [expandedSections, setExpandedSections] = useState({
    memberManagement: false,
    loanManagement: false,
    discountManagement: false
  });

  const handleSectionToggle = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Vistas principales
  const navItems = [
    { icon: HomeIcon, label: 'Inicio', view: 'dashboard' },
    { icon: DescriptionIcon, label: 'Documentos', view: 'documentos' }, 
  ];

  // Gestión de Socios
  const memberManagementItems = [
    { icon: PersonAddIcon, label: 'Agregar Nuevo Socio', view: 'add-member' },
    { icon: PersonRemoveIcon, label: 'Des/Activar Socio', view: 'deactivate-member' },
    { icon: VisibilityIcon, label: 'Ver Socios Activos', view: 'view-active-members' },
  ];

  // Gestión de Préstamos
  const loanManagementItems = [
    { icon: AssignmentIcon, label: 'Ver Préstamos Activos', view: 'view-active-loans' },
    { icon: AssignmentIcon, label: 'Ver Solicitudes', view: 'view-loan-applications' },
    { icon: CancelIcon, label: 'Ver Préstamos Cancelados', view: 'view-canceled-loans' },
    { icon: VisibilityIcon, label: 'Préstamos por Socio', view: 'loans-by-member' },
  ];

  // Gestión de Descuentos
  const discountManagementItems = [
    { icon: AssessmentIcon, label: 'Reporte Anual', view: 'annual-discount-report' },
    { icon: ReceiptIcon, label: 'Reporte Mensual', view: 'monthly-discount-report' },
  ];

  // Vistas extra para admin
  const adminItems = [
    { icon: MonetizationOnIcon, label: 'Contabilidad', view: 'contabilidad' },
    { icon: SettingsIcon, label: 'Administración', view: 'administracion' },
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
            <Divider sx={{ my: 2, backgroundColor: 'rgba(255,255,255,0.2)' }} />
            
            {/* Gestión de Socios */}
            <ListItem
              onClick={() => handleSectionToggle('memberManagement')}
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mx: 1,
                my: 0.5,
                borderRadius: 1,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Gestión de Socios" />
              {expandedSections.memberManagement ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={expandedSections.memberManagement} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {memberManagementItems.map((item) => (
                  <ListItem
                    key={item.view}
                    selected={activeNav === item.view}
                    onClick={() => onNavClick(item.view)}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      mx: 1,
                      my: 0.5,
                      borderRadius: 1,
                      pl: 4,
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
              </List>
            </Collapse>

            {/* Gestión de Préstamos */}
            <ListItem
              onClick={() => handleSectionToggle('loanManagement')}
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mx: 1,
                my: 0.5,
                borderRadius: 1,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Gestión de Préstamos" />
              {expandedSections.loanManagement ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={expandedSections.loanManagement} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {loanManagementItems.map((item) => (
                  <ListItem
                    key={item.view}
                    selected={activeNav === item.view}
                    onClick={() => onNavClick(item.view)}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      mx: 1,
                      my: 0.5,
                      borderRadius: 1,
                      pl: 4,
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
              </List>
            </Collapse>

            {/* Gestión de Descuentos */}
            <ListItem
              onClick={() => handleSectionToggle('discountManagement')}
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mx: 1,
                my: 0.5,
                borderRadius: 1,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  transform: 'translateX(4px)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Gestión de Descuentos" />
              {expandedSections.discountManagement ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={expandedSections.discountManagement} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {discountManagementItems.map((item) => (
                  <ListItem
                    key={item.view}
                    selected={activeNav === item.view}
                    onClick={() => onNavClick(item.view)}
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      mx: 1,
                      my: 0.5,
                      borderRadius: 1,
                      pl: 4,
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
              </List>
            </Collapse>

            <Divider sx={{ my: 2, backgroundColor: 'rgba(255,255,255,0.2)' }} />

            {/* Vistas administrativas */}
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
