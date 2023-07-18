import { React, useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext ";
import { Link } from "react-router-dom";
import CardProducto from "../components/cardProducto/cardProducto";
import svgImage from "./carritovacio.png";
import Spinner from "../components/Spinner/Spiner";

const Carrito = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const totalPrecio = cartItems.reduce((total, producto) => total + parseFloat(producto.precio*producto.cantidad), 0);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="carritoPage">
          <h1>Mi Carrito</h1>
          {cartItems.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={svgImage} alt="Logo" />
              <p>El carrito está vacío</p>
              <Link to="/" className="nav-link" aria-current="page">
                <button type="button">Ver Nuestros Productos</button>
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              {cartItems.map((producto, index) => (
                <CardProducto
                  producto={producto}
                  key={index}
                  style={{ marginRight: "30px" }}
                />
              ))}
            </div>
          )}
          <h3>Total: $ {totalPrecio}</h3>
          {cartItems.length > 0 && (
            <Link to="/formulario" className="nav-link" aria-current="page">
              <button type="button" style={{ marginTop: "10px" }}>
                Confirmar Compra
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
