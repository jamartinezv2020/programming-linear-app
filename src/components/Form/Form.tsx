// src/pages/Form/Form.tsx
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    variableCount: "",
    constraints: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Datos enviados:", formData);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Ingresar Problema
      </Typography>
      <TextField
        label="Número de variables"
        name="variableCount"
        value={formData.variableCount}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Restricciones"
        name="constraints"
        value={formData.constraints}
        onChange={handleInputChange}
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </div>
  );
};

export default Form;
