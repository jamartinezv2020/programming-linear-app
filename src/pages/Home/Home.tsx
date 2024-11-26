// src/pages/Home/Home.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Bienvenido a la Aplicación de Programación Lineal
      </Typography>
      <Typography variant="body1" sx={{ marginY: 2 }}>
        Esta aplicación está diseñada para resolver problemas de optimización
        lineal de manera eficiente y accesible. Permite visualizar resultados,
        gráficos interactivos y modificar restricciones en tiempo real.
      </Typography>
      <Button variant="contained" color="primary" href="/about">
        Aprende más sobre el proyecto
      </Button>
    </Box>
  );
};

export default Home;
