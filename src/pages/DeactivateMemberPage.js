import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Stack,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  IconButton
} from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SearchIcon from '@mui/icons-material/Search';
import WarningIcon from '@mui/icons-material/Warning';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const DeactivateMemberPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deactivatedMemberName, setDeactivatedMemberName] = useState('');

  // Sample data - in a real app this would come from your backend
  const [members, setMembers] = useState([
    {
      id: '#AET-0248',
      nombre: 'Juan Pérez',
      departamento: 'Administración',
      fechaIngreso: '15/03/2018',
      prestamosActivos: 1,
      estado: 'Activo',
      salario: '$1,200.00'
    },
    {
      id: '#AET-0185',
      nombre: 'María González',
      departamento: 'Contabilidad',
      fechaIngreso: '20/06/2019',
      prestamosActivos: 0,
      estado: 'Activo',
      salario: '$1,350.00'
    },
    {
      id: '#AET-0212',
      nombre: 'Carlos Mendoza',
      departamento: 'Sistemas',
      fechaIngreso: '10/01/2020',
      prestamosActivos: 0,
      estado: 'Activo',
      salario: '$1,500.00'
    },
    {
      id: '#AET-0198',
      nombre: 'Ana Torres',
      departamento: 'Recursos Humanos',
      fechaIngreso: '05/11/2017',
      prestamosActivos: 1,
      estado: 'Activo',
      salario: '$1,100.00'
    },
    {
      id: '#AET-0154',
      nombre: 'Luis Vásquez',
      departamento: 'Mantenimiento',
      fechaIngreso: '15/08/2015',
      prestamosActivos: 1,
      estado: 'Activo',
      salario: '$950.00'
    }
  ]);

  const filteredMembers = members.filter(member =>
    member.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.departamento.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeactivateClick = (member) => {
    setSelectedMember(member);
    setConfirmDialogOpen(true);
  };

  const handleConfirmDeactivation = () => {
    // Update member status to "Inactivo"
    setMembers(prevMembers =>
      prevMembers.map(member =>
        member.id === selectedMember.id
          ? { ...member, estado: 'Inactivo' }
          : member
      )
    );
    
    setDeactivatedMemberName(selectedMember.nombre);
    setSuccess(true);
    setConfirmDialogOpen(false);
    setSelectedMember(null);
    
    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleCancelDeactivation = () => {
    setConfirmDialogOpen(false);
    setSelectedMember(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center" spacing={2} mb={3}>
        <PersonRemoveIcon sx={{ fontSize: 32, color: '#d32f2f' }} />
        <Typography variant="h4" fontWeight="bold" color="#d32f2f">
          Desactivar Socio
        </Typography>
      </Stack>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          ¡Socio desactivado exitosamente! El socio {deactivatedMemberName} ha sido desactivado.
        </Alert>
      )}

      <Card sx={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px', mb: 3 }}>
        <CardHeader 
          title="Buscar Socio a Desactivar" 
          sx={{ backgroundColor: '#d32f2f', color: 'white' }}
        />
        <CardContent>
          <TextField
            fullWidth
            placeholder="Buscar por nombre, ID o departamento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />
        </CardContent>
      </Card>

      <Card sx={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
        <CardHeader 
          title="Lista de Socios Activos" 
          sx={{ backgroundColor: '#d32f2f', color: 'white' }}
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Departamento</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Fecha Ingreso</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Salario</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Préstamos Activos</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Estado</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredMembers.map((member, index) => (
                  <TableRow key={index} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="bold">
                        {member.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {member.nombre}
                      </Typography>
                    </TableCell>
                    <TableCell>{member.departamento}</TableCell>
                    <TableCell>{member.fechaIngreso}</TableCell>
                    <TableCell>{member.salario}</TableCell>
                    <TableCell>
                      <Chip 
                        label={member.prestamosActivos} 
                        size="small"
                        color={member.prestamosActivos > 0 ? 'warning' : 'default'}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={member.estado} 
                        size="small"
                        color={member.estado === 'Activo' ? 'success' : 'default'}
                        variant="filled"
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        startIcon={<PersonRemoveIcon />}
                        onClick={() => handleDeactivateClick(member)}
                        disabled={member.prestamosActivos > 0 || member.estado === 'Inactivo'}
                      >
                        {member.estado === 'Inactivo' ? 'Desactivado' : 'Desactivar'}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {filteredMembers.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="textSecondary">
                No se encontraron socios
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {searchTerm ? 'Intenta con otros términos de búsqueda' : 'No hay socios que mostrar'}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Dialog de confirmación */}
      <Dialog open={confirmDialogOpen} onClose={handleCancelDeactivation} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WarningIcon color="warning" />
          Confirmar Desactivación de Socio
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            ¿Está seguro de que desea desactivar al siguiente socio?
          </Typography>
          {selectedMember && (
            <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>
                {selectedMember.nombre}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">ID:</Typography>
                  <Typography variant="body2">{selectedMember.id}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">Departamento:</Typography>
                  <Typography variant="body2">{selectedMember.departamento}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">Fecha Ingreso:</Typography>
                  <Typography variant="body2">{selectedMember.fechaIngreso}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">Préstamos Activos:</Typography>
                  <Typography variant="body2">{selectedMember.prestamosActivos}</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
          <Alert severity="warning" sx={{ mt: 2 }}>
            <Typography variant="body2">
              <strong>Importante:</strong> Esta acción desactivará el socio pero NO eliminará sus datos. 
              El socio podrá ser reactivado en el futuro si es necesario.
            </Typography>
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDeactivation} startIcon={<CloseIcon />}>
            Cancelar
          </Button>
          <Button 
            onClick={handleConfirmDeactivation} 
            color="error" 
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Confirmar Desactivación
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeactivateMemberPage;
