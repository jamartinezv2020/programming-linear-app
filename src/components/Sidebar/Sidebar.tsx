// src/components/Sidebar/Sidebar.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Box,
  Divider
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ProblemIcon from "@mui/icons-material/QuestionAnswer";
import StepIcon from "@mui/icons-material/Functions";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MapIcon from "@mui/icons-material/Map";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Home", path: "/", icon: <HomeIcon /> },
  { text: "About", path: "/about", icon: <InfoIcon /> },
  { text: "Formulario", path: "/form", icon: <FormatListBulletedIcon /> },
  { text: "Problema Básico", path: "/problem-display", icon: <ProblemIcon /> },
  { text: "Solución Completa", path: "/solution-steps", icon: <StepIcon /> },
  { text: "Método Gráfico", path: "/graphics", icon: <TrendingUpIcon /> },
  { text: "Región Factible", path: "/feasible-region", icon: <MapIcon /> },
  { text: "Tableros", path: "/boards", icon: <DashboardIcon /> },
  {
    text: "Análisis de Sensibilidad",
    path: "/sensitivity-analysis",
    icon: <InsightsIcon />
  }
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      PaperProps={{
        style: {
          width: isOpen ? "250px" : "60px",
          transition: "width 0.3s ease",
          overflow: "hidden",
          backgroundColor: "#f4f4f4"
        }
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={isOpen ? "flex-end" : "center"}
        padding="0.5rem"
      >
        <IconButton onClick={toggleSidebar}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.path}
            style={{
              backgroundColor:
                location.pathname === item.path ? "#d1e7ff" : "transparent",
              borderRadius: "4px",
              margin: "4px 0"
            }}
          >
            <ListItemIcon
              style={{
                color: location.pathname === item.path ? "#1976d2" : "#757575",
                minWidth: "40px",
                justifyContent: "center"
              }}
            >
              {item.icon}
            </ListItemIcon>
            {isOpen && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  style: {
                    color: location.pathname === item.path ? "#1976d2" : "#000"
                  }
                }}
              />
            )}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
