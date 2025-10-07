import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Button, Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import StatsCard from '../components/StatsCard';
import LoanTable from '../components/LoanTable';
import QuickActions from '../components/QuickActions';
import PendingRequests from '../components/PendingRequests';
import WelcomeHeader from '../components/WelcomeHeader';
import LoanModal from '../components/LoanModal';
import { AccountBalance, ReceiptLong, TrendingDown } from '@mui/icons-material'; // Ensure all icons imported
import GroupIcon from '@mui/icons-material/Group';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = ({ activeNav }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const stats = [
    { icon: GroupIcon, title: 'Total Socios', number: '248', subtitle: '+5 este mes' },
    { icon: AccountBalance, title: 'Préstamos Activos', number: '42', subtitle: '$125,800 total' },
    { icon: ReceiptLong, title: 'Ingresos del Mes', number: '$12,580', subtitle: '+$1,240 vs mes anterior' },
    { icon: TrendingDown, title: 'Egresos del Mes', number: '$8,340', subtitle: '+$420 vs mes anterior' },
  ];

  const loanRows = [
    { Socio: 'María González', Monto: '$3,000.00', Fecha: '15/08/2023', Estado: 'Aprobado', Acciones: 'Ver' },
    { Socio: 'Carlos Mendoza', Monto: '$2,500.00', Fecha: '12/08/2023', Estado: 'Pendiente', Acciones: 'Revisar' },
    { Socio: 'Ana Torres', Monto: '$4,200.00', Fecha: '10/08/2023', Estado: 'Aprobado', Acciones: 'Ver' },
    { Socio: 'Luis Vásquez', Monto: '$3,500.00', Fecha: '08/08/2023', Estado: 'Rechazado', Acciones: 'Ver' },
  ];

  const financialData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    datasets: [
      {
        label: 'Ingresos',
        data: [12000, 19000, 15000, 18000, 22000, 21000, 19500, 12580],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Egresos',
        data: [9800, 12000, 11000, 10500, 13500, 14200, 12100, 8340],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => `$${value.toLocaleString()}` },
      },
    },
  };

  return (
    <>
      <WelcomeHeader title="Panel de Administración - AETPUCE" subtitle="Sistema integral para la administración de la asociación" />
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
              title="Préstamos Recientes"
              action={<Button size="small" variant="outlined">Ver todos</Button>}
              titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
              <LoanTable rows={loanRows} isAdmin={true} />
            </CardContent>
          </Card>
          <Card sx={{ mt: 3 }}>
            <CardHeader title="Resumen Financiero" titleTypographyProps={{ variant: 'h6' }} />
            <CardContent>
              <Box sx={{ height: 300 }}>
                <Bar data={financialData} options={chartOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}> {/* Updated: No 'item', use 'size' */}
          <QuickActions onLoanRequest={() => setModalOpen(true)} isAdmin={true} />
          <PendingRequests />
        </Grid>
      </Grid>
      <LoanModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default AdminDashboard;