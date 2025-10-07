import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Button, Box, Typography } from '@mui/material';
import StatsCard from '../components/StatsCard';
import LoanTable from '../components/LoanTable';
import QuickActions from '../components/QuickActions';
import LoanModal from '../components/LoanModal';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const AdminDashboard = ({ activeNav }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { icon: GroupIcon, title: 'Total Socios', number: '248', subtitle: '+5 este mes' },
    { icon: AccountBalanceIcon, title: 'Préstamos Activos', number: '42', subtitle: '$125,800 total' },
    { icon: MonetizationOnIcon, title: 'Ingresos del Mes', number: '$12,580', subtitle: '+$1,240 vs mes anterior' },
    { icon: TrendingDownIcon, title: 'Egresos del Mes', number: '$8,340', subtitle: '+$420 vs mes anterior' },
  ];

  const loanRows = [
    { Socio: 'María González', Monto: '$3,000.00', Fecha: '15/08/2023', Estado: 'Aprobado', Acciones: 'Ver' },
    { Socio: 'Carlos Mendoza', Monto: '$2,500.00', Fecha: '12/08/2023', Estado: 'Pendiente', Acciones: 'Revisar' },
    { Socio: 'Ana Torres', Monto: '$4,200.00', Fecha: '10/08/2023', Estado: 'Aprobado', Acciones: 'Ver' },
  ];

  return (
    <Box sx={{  backgroundColor: '#f5f5f5' }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 1, color: '#ffffffff' , 
        backgroundColor: '#0056b3', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '4px',fontSize: '1,4rem',textTransform: 'none' }}>
        Panel de Administración - AETPUCE
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: '#666' }}>
        Sistema integral para la administración de la asociación
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
            <CardHeader 
              title="Préstamos Recientes"
              titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
              action={
                <Button 
                  size="small" 
                  sx={{ 
                    backgroundColor: '#0056b3', 
                    color: 'white', 
                    '&:hover': { backgroundColor: '#003d7a' },
                    fontSize: '0.75rem',
                    textTransform: 'none'
                  }}
                >
                  Ver todos
                </Button>
              }
            />
            <LoanTable rows={loanRows} />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '4px' }}>
            <CardHeader 
              title="Acciones Rápidas"
              titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
            />
            <CardContent>
              <QuickActions onLoanRequest={() => setModalOpen(true)} isAdmin={true} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <LoanModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default AdminDashboard;