import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Chip } from '@mui/material';

const LoanTable = ({ rows, title, actionsHeader, isAdmin = false }) => {
  const getChipColor = (status) => {
    const colors = { Aprobado: 'success', Pendiente: 'warning', Rechazado: 'error', Activo: 'success', Pagado: 'info' };
    return colors[status] || 'default';
  };

  const headers = isAdmin
    ? ['Socio', 'Monto', 'Fecha', 'Estado', 'Acciones']
    : ['Monto', 'Fecha', 'Plazo', 'Cuota Mensual', 'Estado', 'Acciones'];

  return (
    <TableContainer component={Paper} sx={{ fontSize: '0.9rem' }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#e9ecef' }}>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover>
              {headers.map((header) => (
                <TableCell key={header}>
                  {header === 'Estado' ? (
                    <Chip label={row[header]} color={getChipColor(row[header])} size="small" />
                  ) : header === 'Acciones' ? (
                    <Button variant="outlined" size="small" color="primary">
                      {row[header] || 'Ver'}
                    </Button>
                  ) : (
                    row[header]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LoanTable;
