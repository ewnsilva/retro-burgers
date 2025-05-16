import { ThemeProvider } from '@mui/material';

import { Home } from 'pages';
import { CartProvider, defaultTheme } from 'utils';

import './App.css';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <div className="App">
          <Home />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};
