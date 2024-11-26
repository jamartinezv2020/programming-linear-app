// src/pages/About/About.tsx
import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import Layout from "../../components/Layout/Layout";

const About: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h4" color="primary" gutterBottom>
        Sobre el Proyecto
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Este proyecto tiene como objetivo facilitar la resolución de problemas
        de programación lineal a través de herramientas modernas y accesibles.
        Algunas características principales incluyen:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Visualización de resultados de optimización" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gráficos interactivos para entender las soluciones" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Interfaces intuitivas para ingresar restricciones y ecuaciones" />
        </ListItem>
      </List>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Tecnologías utilizadas: React, TypeScript, Material-UI y más.
      </Typography>
    </Layout>
  );
};

export default About;
