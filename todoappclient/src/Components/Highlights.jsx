import React from 'react';
import { Typography, Stack, Container, Card, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Gestión flexible',
    description: 'Organiza tus tareas de forma adaptable a tu estilo de trabajo, optimizando tu productividad.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Diseñada para durar',
    description: 'Una plataforma robusta y confiable que te acompaña en cada proyecto, sin importar su complejidad.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Experiencia intuitiva',
    description: 'Interfaz fácil de usar para que gestionar tus pendientes sea rápido, sencillo y sin complicaciones.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Automatización inteligente',
    description: 'Optimiza tu flujo de trabajo con recordatorios, prioridades y categorización automática de tareas.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Soporte confiable',
    description: 'Estamos aquí para ayudarte en cada paso, asegurando que tu experiencia sea impecable.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Seguimiento detallado',
    description: 'Visualiza tu progreso con estadísticas claras y análisis de rendimiento en tus tareas.',
  },
];

const Highlights = () => {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>

          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Descubra por qué nuestro producto destaca:
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Highlights;
