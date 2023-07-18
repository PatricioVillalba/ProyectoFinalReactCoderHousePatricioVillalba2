import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";
// componentes
import CardProducto from "./components/cardProducto/cardProducto";
import NavBar from "./components/NavBar/NavBar";
// vistas
import HomePage from "./Views/HomePage";
import FormPage from "./Views/FormPage";
import CarritoPage from "./Views/CarritoPage";
import Detalles from "./Views/DetailPage";
import Categoria from "./Views/CategoriaPage";
import CompraExitosa from "./Views/CompraExitosaPage";

import { CartProvider } from "./contexts/CartContext ";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          {/* <Header /> */}
          <CartProvider>
            <NavBar />
            <Routes >
              {<Route path="/" element={<HomePage />} />}
              {<Route path="/formulario" element={<FormPage />} />}
              {<Route path="/CompraExitosaPage" element={<CompraExitosa />} />}
              {<Route path="/carrito" element={<CarritoPage />} />}
              {<Route path='/detail/:id' element={<Detalles/>}/>} 
              {<Route path='/categoria/:categoria' element={<Categoria/>}/>} 
            </Routes>
          </CartProvider>
        </Router>
      </div>
    );
  }
}
export default App;
