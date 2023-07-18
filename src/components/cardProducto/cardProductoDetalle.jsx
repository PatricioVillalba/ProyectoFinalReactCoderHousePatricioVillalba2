import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext ";

export default function cardProductoDetalle({ producto }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [botonPresionado, setBotonPresionado] = useState(false);
  
  const agregarProducto = () => {
    const nuevoProducto = {
      id: producto.id,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      imagen: producto.imagen,
      precio: producto.precio,
      stock: producto.stock,
      cantidad: 1,
    };
    setCartItems((prevElementos) => prevElementos.concat(nuevoProducto));
  };
  const verificarProductoEnCarrito = (producto) => {
    return cartItems.some((item) => item.id === producto.id);
  };
  const estaEnCarrito = verificarProductoEnCarrito(producto);

  return (
    <Card sx={{ maxWidth: 420, margin: '20px', padding: '10px', border: '5px solid goldenrod', color: '#FFFFFF', backgroundColor: '#242424' }}>
      <CardMedia
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
          width: 400,
        }}
        image={producto.imagen}
        title={producto.nombre}
      />
      <CardContent sx={{ color: 'white' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {producto.descripcion}
        </Typography>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab variant="extended" size="small" aria-label="add" sx={{ mr: 1, }} >
            <Link to={`/categoria/${producto.categoria}`} className="nav-link" style={{ color: 'FFFFFF' }}>
              Categoria:
              <strong>
                {producto.categoria}
              </strong>
            </Link>
          </Fab>
          <h1>${producto.precio}</h1>
        </Box>

        <br />
        <Link to={`/`} className="nav-link">
          <button>
            Ir al Inicio
          </button>
        </Link>
        <Link to={`/categoria/${producto.categoria}`} className="nav-link">
          <button>
            Ir a {producto.categoria}
          </button>
        </Link>
      </CardContent>
                        {!estaEnCarrito && (
                            <button onClick={agregarProducto} disabled={botonPresionado}>
                            {botonPresionado ? 'Agregado' : 'Agregar producto'}
                            </button>
                        )}
                        {estaEnCarrito && (
                            <button>Producto en el carrito</button>
                        )}
    </Card>
  );
}
