import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';

import { AppRoutes } from 'utils/routes';
import { CartProvider } from 'utils/context/CartContext';
import { ThemeProvider } from 'utils/context/Theme';
import { queryClient } from 'utils/hooks/useQueryClient';

import './App.css';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
