import { createContext, useState } from "react";

// Creamos el contexto
export const CartContext = createContext();

// Creamos el proveedor del contexto
export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
