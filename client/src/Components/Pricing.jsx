import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Chip, Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'Gratis',
    price: '0',
    description: [
      'Incluye 10 usuarios',
      '2 GB de almacenamiento',
      'Acceso al centro de ayuda',
      'Soporte por correo electrónico',
    ],
    buttonText: 'Regístrate gratis',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Profesional',
    subheader: 'Recomendado',
    price: '15',
    description: [
      'Incluye 20 usuarios',
      '10 GB de almacenamiento',
      'Acceso al centro de ayuda',
      'Soporte prioritario por correo electrónico',
      'Equipo dedicado',
      'Mejores ofertas',
    ],
    buttonText: 'Comenzar ahora',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
  },
  {
    title: 'Empresarial',
    price: '30',
    description: [
      'Incluye 50 usuarios',
      '30 GB de almacenamiento',
      'Acceso al centro de ayuda',
      'Soporte telefónico y por correo electrónico',
    ],
    buttonText: 'Comenzar ahora',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

const Pricing = () => {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          Precios
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }} key={tier.title}>
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                tier.title === 'Professional' &&
                  ((theme) => ({
                    border: 'none',
                    background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                    boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                    ...theme.applyStyles('dark', {
                      background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                      boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                    }),
                  })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Profesional' && <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />}
                </Box>

                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                    },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>

                  <Typography component="h3" variant="h6">
                    &nbsp; / mes
                  </Typography>
                </Box>

                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box key={line} sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === 'Profesional' ? { color: 'primary.light' } : { color: 'primary.main' },
                      ]}
                    />
                    <Typography variant="subtitle2" component={'span'}>
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>

              <CardActions>
                <Button fullWidth variant={tier.buttonVariant} color={tier.buttonColor}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
