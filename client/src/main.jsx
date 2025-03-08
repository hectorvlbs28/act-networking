import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from './Router/App.jsx';
import esMessages from './Locales/es.json';
import { store } from './Redux/Store';
//import { AppProvider } from './Context/AppContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <IntlProvider locale="es" messages={esMessages}>
          <App />
        </IntlProvider>
      </Provider>
    </StyledEngineProvider>
  </StrictMode>
);
