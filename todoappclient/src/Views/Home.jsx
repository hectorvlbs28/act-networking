import React from 'react';
import { CssBaseline, Divider, Box } from '@mui/material';
import AppTheme from '../Theme/AppTheme';
import Hero from '../Components/Hero';
import Highlights from '../Components/Highlights';
import Pricing from '../Components/Pricing';

const Home = (props) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <Box>
        <Hero />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
      </Box>
    </AppTheme>
  );
};

export default Home;
