import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="">
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="false"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#fff" }}
      >
        Categorias
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to={`/categoria/comics`} className="nav-link">
          <MenuItem>Comics</MenuItem>
        </Link>
        <Link to={`/categoria/libros`} className="nav-link">
          <MenuItem >Libros</MenuItem>
        </Link>
        <Link to={`/categoria/figuras`} className="nav-link">
          <MenuItem >Figuras</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
