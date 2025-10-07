import React from 'react';
import { Card, CardHeader, CardContent, Button, Box } from '@mui/material';
import { AddCircle, PersonAdd, Receipt, Payment, PictureAsPdf, Handshake, Download, Description as FileIcon, Edit } from '@mui/icons-material';

const QuickActions = ({ buttons, onLoanRequest, isAdmin = false }) => {
  const adminButtons = [
    { label: 'Nuevo Préstamo', icon: AddCircle, variant: 'contained', color: 'primary', onClick: onLoanRequest },
    { label: 'Registrar Socio', icon: PersonAdd, variant: 'outlined', color: 'primary' },
    { label: 'Registrar Ingreso', icon: Receipt, variant: 'outlined', color: 'primary' },
    { label: 'Registrar Egreso', icon: Payment, variant: 'outlined', color: 'primary' },
    { label: 'Generar Reporte', icon: PictureAsPdf, variant: 'outlined', color: 'primary' },
  ];

  const memberButtons = [
    { label: 'Solicitar Préstamo', icon: Handshake, variant: 'contained', color: 'primary', onClick: onLoanRequest },
    { label: 'Realizar Pago', icon: Receipt, variant: 'outlined', color: 'primary' },
    { label: 'Estados de Cuenta', icon: Download, variant: 'outlined', color: 'primary' },
    { label: 'Documentos', icon: FileIcon, variant: 'outlined', color: 'primary' },
    { label: 'Actualizar Datos', icon: Edit, variant: 'outlined', color: 'primary' },
  ];

  const finalButtons = isAdmin ? adminButtons : memberButtons;

  return (
    <Card>
      <CardHeader title="Acciones Rápidas" titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {finalButtons.map((btn, index) => (
            <Button
              key={index}
              variant={btn.variant}
              color={btn.color}
              startIcon={<btn.icon />}
              fullWidth
              onClick={btn.onClick}
              sx={{ justifyContent: 'flex-start' }}
            >
              {btn.label}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
