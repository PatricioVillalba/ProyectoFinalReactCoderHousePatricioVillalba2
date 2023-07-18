import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CartContext } from "../../contexts/CartContext ";
import Boton from "../Boton/Boton";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function ActionAreaCard({ producto }) {
    const { cartItems, setCartItems } = useContext(CartContext);
    const [botonPresionado, setBotonPresionado] = useState(false);
   
    const agregarProducto = () => {
        const nuevoProducto = {
          id: producto.id,
          nombre: producto.nombre,
          descripcion:producto.descripcion,
          imagen:producto.imagen,
          precio:producto.precio,
          stock:producto.stock,
          cantidad:1,
        };
        setCartItems((prevElementos) => prevElementos.concat(nuevoProducto));
    };
        const verificarProductoEnCarrito = (producto) => {
          return cartItems.some((item) => item.id === producto.id);
      };
      const estaEnCarrito = verificarProductoEnCarrito(producto);
    return (
        <Card sx={{ maxWidth: 350 , margin: '20px', padding: '10px', border: '5px solid goldenrod', color: '#FFFFFF', backgroundColor: '#242424' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="340"
                    image={producto.imagen}
                    alt={producto.nombre}
                />
                <CardContent >
                    <Typography gutterBottom component="div" sx={{ fontWeight: 'bold'}}>
                        {producto.nombre.length <= 30
                            ? producto.nombre
                            : producto.nombre.slice(0, 30) + '...'}
                    </Typography>
                    <Typography variant="body2" >
                        {producto.descripcion.length <= 100
                            ? producto.descripcion
                            : producto.descripcion.slice(0, 100) + '...'}
                    </Typography>
                    <h2>${producto.precio}</h2>
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab variant="extended" size="small"  aria-label="add" sx={{ mr: 1 , backgroundColor:'white' }} >
            <Link to={`/categoria/${producto.categoria}`} className="nav-link" style={{ color: 'black' }}>
              Categoria:
              <strong>
              {producto.categoria}
              </strong>
            </Link>

          </Fab>
        </Box>
                </CardContent>
                    <Link to={`/detail/${producto.id}`} className="nav-link">
                        <button>
                        Ver
                        </button>
                    </Link>
                        {!estaEnCarrito && (
                            <button onClick={agregarProducto} disabled={botonPresionado}>
                            {botonPresionado ? 'Agregado' : 'Agregar producto'}
                            </button>
                        )}
                        {estaEnCarrito && (
                            <button>Producto en el carrito</button>
                        )}

            </CardActionArea>
        </Card>
    );
}