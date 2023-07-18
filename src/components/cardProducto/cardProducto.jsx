import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Boton from "../Boton/Boton";
import { CartContext } from "../../contexts/CartContext ";

export default function cardProducto({ producto }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRestarCantidad = () => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === producto.id) {
          const updatedItem = { ...item, cantidad: item.cantidad - 1 };
          return updatedItem;
        }
        return item;
      })
      .filter((item) => item.cantidad > 0);
    setCartItems(updatedCartItems);
  };

  const handleSumarCantidad = () => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === producto.id) {
        const nuevaCantidad = parseInt(item.cantidad) + 1;
        const updatedItem = {
          ...item,
          cantidad: nuevaCantidad <= item.stock ? nuevaCantidad : item.stock,
        };
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card sx={{ maxWidth: 345 , margin: '20px', padding: '10px', border: '5px solid goldenrod', color: '#FFFFFF', backgroundColor: '#242424' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={producto.imagen}
        title={producto.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre.slice(0, 10)}..
        </Typography>
        <Typography variant="subtitle1" component="div">
          Cantidad:{producto.cantidad}
        </Typography>
        <Typography variant="body2">
          stock disponible:{producto.stock}
        </Typography>
        <Typography variant="body2">
         $:{producto.precio}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <button onClick={handleRestarCantidad} className="error-button">
          -
        </button>
        <button onClick={handleSumarCantidad} className="error-button">
          +
        </button>
      </CardActions>
    </Card>
  );
}
