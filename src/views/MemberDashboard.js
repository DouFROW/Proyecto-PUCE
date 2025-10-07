import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Button, Box, List, ListItem, ListItemText, Typography, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import StatsCard from '../components/StatsCard';
import LoanTable from '../components/LoanTable';
import QuickActions from '../components/QuickActions';
import WelcomeHeader from '../components/WelcomeHeader';
import LoanModal from '../components/LoanModal';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EventIcon from '@mui/icons-material/Event';
import SavingsIcon from '@mui/icons-material/Savings';
import HistoryIcon from '@mui/icons-material/History';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const MemberDashboard = ({ activeNav }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { icon: AccountBalanceIcon, title: 'Préstamo Actual', number: '$5,000', subtitle: 'Quedan 12 cuotas' },
    { icon: EventIcon, title: 'Próximo Pago', number: '$350.50', subtitle: 'Vence 05/09/2023' },
    { icon: SavingsIcon, title: 'Ahorros', number: '$2,840', subtitle: '+$120 este mes' },
    { icon: HistoryIcon, title: 'Préstamos Pagados', number: '2', subtitle: 'Total $8,500' },
  ];

  const loanRows = [
    { Monto: '$5,000.00', Fecha: '15/03/2023', Plazo: '24 meses', 'Cuota Mensual': '$350.50', Estado: 'Activo', Acciones: 'Ver Detalles' },
    { Monto: '$2,500.00', Fecha: '10/06/2022', Plazo: '12 meses', 'Cuota Mensual': '$285.75', Estado: 'Pagado', Acciones: 'Ver Historial' },
    { Monto: '$3,000.00', Fecha: '20/01/2021', Plazo: '18 meses', 'Cuota Mensual': '$305.20', Estado: 'Pagado', Acciones: 'Ver Historial' },
  ];

  const paymentData = {
    labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene 2024'],
    datasets: [{
      label: 'Proyección de Pagos',
      data: [350, 350, 350, 350, 350, 350, 350],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => `$${value}` },
      },
    },
  };

  const documents = [
    { title: 'Estatutos Actualizados 2023', subtitle: 'Actualización de estatutos aprobada en asamblea.', date: 'Hace 3 días' },
    { title: 'Normativa de Préstamos', subtitle: 'Nueva normativa para solicitud de préstamos.', date: 'Hace 1 semana' },
    { title: 'Acta de Asamblea General', subtitle: 'Acta de la última asamblea general ordinaria.', date: 'Hace 2 semanas' },
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f5f5' }}>
      <WelcomeHeader title="Bienvenido, Juan Pérez" subtitle="Número de socio: #AET-0248" />
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard {...stat} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <CardHeader
              title={<Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0056b3' }}>Mis Préstamos</Typography>}
              action={<Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>Solicitar Préstamo</Button>}
            />
            <Divider />
            <CardContent>
              <LoanTable rows={loanRows} isAdmin={false} />
            </CardContent>
          </Card>
          <Card sx={{ mt: 3, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <CardHeader title={<Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0056b3' }}>Próximos Pagos</Typography>} />
            <Divider />
            <CardContent>
              <Box sx={{ height: 300 }}>
                <Line data={paymentData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <CardHeader title={<Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0056b3' }}>Acciones Rápidas</Typography>} />
            <Divider />
            <CardContent>
              <QuickActions onLoanRequest={() => setModalOpen(true)} isAdmin={false} />
            </CardContent>
          </Card>
          <Card sx={{ mt: 3, boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <CardHeader title={<Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0056b3' }}>Documentos Recientes</Typography>} />
            <Divider />
            <CardContent>
              <List>
                {documents.map((doc, index) => (
                  <ListItem key={index} component="button" divider={index < documents.length - 1}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: '#0056b3' }}>{doc.title}</Typography>
                          <Typography variant="body2" color="text.secondary">{doc.date}</Typography>
                        </Box>
                      }
                      secondary={doc.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <LoanModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default MemberDashboard;