import { Home } from 'pages';
import { ThemeProvider } from '@mui/material';
import './App.css';
import { CartProvider, defaultTheme } from 'context';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <div className="App">
          <Home />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
