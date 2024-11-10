import { Home } from "pages";

import "./App.css";
import { CartProvider } from "context";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;
