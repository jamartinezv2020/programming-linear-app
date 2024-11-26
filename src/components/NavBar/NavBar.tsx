// src/components/NavBar/NavBar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#003366" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Mi Aplicación
          </Link>
        </Typography>
        <Button color="inherit" onClick={toggleSidebar}>
          Menú
        </Button>
        <Button color="inherit" component={Link} to="/linear-programming-form">
          Programación Lineal
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Acerca de
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
