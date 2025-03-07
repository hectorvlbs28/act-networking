import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './Router/App.jsx';
import { AppProvider } from './Context/AppContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <AppProvider>
        <App />
      </AppProvider>
    </StyledEngineProvider>
  </StrictMode>
);
