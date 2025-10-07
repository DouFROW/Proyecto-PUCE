import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const StatsCard = ({ icon: Icon, title, number, subtitle, sx }) => {
  const theme = useTheme();

  return (
    <Card sx={{ textAlign: 'center', p: 3, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, ...sx }}>
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ fontSize: '2.5rem', color: theme.palette.primary.main, mb: 2 }}>
          {Icon ? <Icon /> : null} {/* Safeguard: Skip if Icon is undefined */}
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mb: 1 }}>
          {number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;