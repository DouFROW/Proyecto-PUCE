import React from 'react';
import { AppBar, Toolbar, Typography, Box, Badge, Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Navbar = ({ currentView, onSwitchView }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userType = currentView === 'admin' ? 'Administrador' : 'Socio';
  const switchText = currentView === 'admin' ? 'Cambiar a Vista de Socio' : 'Cambiar a Vista de Administrador';

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Sistema AETPUCE
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge badgeContent={userType} color="info" sx={{ position: 'relative', mr: 2, top: 0, right: 0 }}>
              <span>{userType}</span>
            </Badge>
            <IconButton onClick={handleMenu} sx={{ ml: 1 }}>
              <Avatar alt="User " src="#" sx={{ width: 32, height: 32 }} />
            </IconButton>
            <Typography variant="body2" sx={{ mr: 2 }}>Admin User</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
        <MenuItem onClick={handleClose}>Configuración</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
        <MenuItem onClick={() => { onSwitchView(); handleClose(); }}>{switchText}</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
