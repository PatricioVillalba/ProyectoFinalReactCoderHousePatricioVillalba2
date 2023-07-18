import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import MenuList from "../MenuList/MenuList";
import svgImage from "./Marvel_Logo.png";

const drawerWidth = 240;
const navItems = ["Inicio"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", textAlign: "left" },
            }}
          >
             {/* <img src={svgImage} alt="Imagen SVG" /> */}
             <Link to={`/`} className="nav-link">
             <img src={svgImage} alt="Logo" style={{ width: '120px', height: '40px' }} />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button>
            <MenuList></MenuList>
            </Button>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={item == "Inicio" ? "/" : `/${item}`}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <CartIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
