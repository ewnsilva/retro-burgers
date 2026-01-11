import { BrowserRouter } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import { AppRoutes } from 'utils/routes';
import { CartProvider } from 'utils/context/CartContext';
import { ThemeProvider } from 'utils/context/Theme';

import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CssBaseline />
        <CartProvider>
          <div className="App">
            <AppRoutes />
          </div>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
