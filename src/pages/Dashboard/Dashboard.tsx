// src/pages/Dashboard/Dashboard.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box, CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

const SIDEBAR_WIDTH = 250; // Ancho del Sidebar

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: isSidebarOpen ? `${SIDEBAR_WIDTH}px` : "0px", // Cuando el Sidebar está cerrado, el ancho es 0
          flexShrink: 0,
          overflow: "hidden", // Ocultar contenido si el Sidebar está cerrado
          transition: "width 0.3s ease"
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "1rem",
          transition: "margin-left 0.3s ease, width 0.3s ease", // Transición para el ancho y margen
          marginLeft: isSidebarOpen ? `${SIDEBAR_WIDTH}px` : "0px", // Desplazar el contenido cuando el Sidebar está abierto
          width: isSidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH}px)` : "100%" // Redimensionar el ancho del contenido cuando el Sidebar está cerrado
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            boxShadow: "none",
            marginBottom: "1rem"
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Contenido dinámico (páginas internas) */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
