import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Button, Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import StatsCard from '../components/StatsCard';
import LoanTable from '../components/LoanTable';
import QuickActions from '../components/QuickActions';
import WelcomeHeader from '../components/WelcomeHeader';
import LoanModal from '../components/LoanModal';
import { AccountBalance, Event, Savings, History } from '@mui/icons-material'; // Ensure all icons imported

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const MemberDashboard = ({ activeNav }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { icon: AccountBalance, title: 'Préstamo Actual', number: '$5,000', subtitle: 'Quedan 12 cuotas' },
    { icon: Event, title: 'Próximo Pago', number: '$350.50', subtitle: 'Vence 05/09/2023' },
    { icon: Savings, title: 'Ahorros', number: '$2,840', subtitle: '+$120 este mes' },
    { icon: History, title: 'Préstamos Pagados', number: '2', subtitle: 'Total $8,500' },
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
    <>
      <WelcomeHeader title="Bienvenido, Juan Pérez" subtitle="Número de socio: #AET-0248" />
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}> {/* Updated: No 'item', use 'size' object */}
            <StatsCard {...stat} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 8 }}> {/* Updated: No 'item', use 'size' */}
          <Card>
            <CardHeader
              title="Mis Préstamos"
              action={<Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>Solicitar Préstamo</Button>}
              titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
              <LoanTable rows={loanRows} isAdmin={false} />
            </CardContent>
          </Card>
          <Card sx={{ mt: 3 }}>
            <CardHeader title="Próximos Pagos" titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Box sx={{ height: 300 }}>
                <Line data={paymentData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}> {/* Updated: No 'item', use 'size' */}
          <QuickActions onLoanRequest={() => setModalOpen(true)} isAdmin={false} />
          <Card sx={{ mt: 3 }}>
            <CardHeader title="Documentos Recientes" titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <List>
                {documents.map((doc, index) => (
                  <ListItem key={index} component="button" divider={index < documents.length - 1}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="subtitle1">{doc.title}</Typography>
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
    </>
  );
};

export default MemberDashboard;