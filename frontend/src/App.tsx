import { CssBaseline } from '@mui/material';

import { Home } from './pages/Home/index';
import { CartProvider } from 'utils/context/CartContext';
import { ThemeProvider } from 'utils/context/Theme';

import './App.css';

export const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <CartProvider>
        <div className="App">
          <Home />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};
