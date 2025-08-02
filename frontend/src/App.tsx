import { Home } from 'pages';
import { CartProvider, ThemeProvider } from 'utils';

import './App.css';

export const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="App">
          <Home />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
};
