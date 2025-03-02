import React from 'react';
import { CssBaseline, Box, Container, Typography } from '@mui/material';
import AppTheme from '../Theme/AppTheme';

const Tasks = () => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            marginTop: 12,

            border: '1px solid red',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              textAlign: 'center',
            }}
          >
            Tus tareas
          </Typography>
        </Box>
      </Container>
    </AppTheme>
  );
};

export default Tasks;
