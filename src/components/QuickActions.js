import React from 'react';
import { Button, Box } from '@mui/material';
//import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ReceiptIcon from '@mui/icons-material/Receipt';
//import PaymentIcon from '@mui/icons-material/Payment';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const QuickActions = ({ onLoanRequest, isAdmin = false }) => {
   if (!isAdmin) return null;
   
  const adminButtons = [
    //{ label: 'Nuevo Préstamo', icon: AddCircleIcon, variant: 'contained', color: 'primary', onClick: onLoanRequest },
    { label: 'Registrar Socio', icon: PersonAddIcon, variant: 'outlined', color: 'primary' },
    { label: 'Aprobar Préstamo ', icon: ReceiptIcon, variant: 'outlined', color: 'primary' },
    { label: 'Generar Reporte', icon: PictureAsPdfIcon, variant: 'outlined', color: 'primary' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {adminButtons.map((btn, index) => (
        <Button
          key={index}
          variant={btn.variant}
          color={btn.color}
          startIcon={<btn.icon />}
          fullWidth
          onClick={btn.onClick}
          sx={{ 
            justifyContent: 'flex-start',
            textTransform: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            fontSize: '0.875rem'
          }}
        >
          {btn.label}
        </Button>
      ))}
    </Box>
  );
};

export default QuickActions;
