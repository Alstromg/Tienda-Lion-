import Navbar from "./Componentes/navbar";
import "./app.css";
import { Conocer } from "./Componentes/Conocer";
import { Inicio } from "./Componentes/Inicio";
import { PieDePagina } from "./Componentes/Piedepagina";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from "./Componentes/itemListContainer";
import { DesProducto } from "./Componentes/DesProducto";
import CartWidget from "./Componentes/CartWidget";
import { DarModeProvider } from "./Componentes/DarModeContext";
import { CartContext } from "./Componentes/context";
import { Checkout } from "./Componentes/Checkout";

function App() {
  return (
    <DarModeProvider>
      <CartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/productos/:categoria/:id" element={<DesProducto />} />
            <Route path="/conocer" element={<Conocer />} />
            <Route path="/carrito" element={<CartWidget />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/inicio" />} />
          </Routes>
          <PieDePagina />
        </BrowserRouter>
      </CartContext>
    </DarModeProvider>
  );
}

export default App;

 