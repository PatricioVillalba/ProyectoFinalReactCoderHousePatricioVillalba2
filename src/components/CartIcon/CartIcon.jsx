import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext ";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Link to="/carrito" className="navbar-brand" aria-current="page">
        <IconButton  aria-label="Carrito de compras">
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default CartIcon;
