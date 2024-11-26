// src/components/Form/ProblemForm.tsx
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { toast } from "react-toastify";

const ProblemForm: React.FC = () => {
  const [objective, setObjective] = useState("");
  const [constraints, setConstraints] = useState<string[]>([""]);

  const addConstraint = () => setConstraints([...constraints, ""]);
  const handleConstraintChange = (index: number, value: string) => {
    const updated = [...constraints];
    updated[index] = value;
    setConstraints(updated);
  };

  const solveProblem = () => {
    if (!objective) {
      toast.error("La función objetivo es obligatoria.");
      return;
    }
    toast.success("Problema resuelto.");
    console.log({ objective, constraints });
  };

  return (
    <div>
      <h2>Ingresar Problema</h2>
      <TextField
        label="Función Objetivo"
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
      />
      <div>
        {constraints.map((constraint, idx) => (
          <TextField
            key={idx}
            label={`Restricción ${idx + 1}`}
            value={constraint}
            onChange={(e) => handleConstraintChange(idx, e.target.value)}
          />
        ))}
      </div>
      <Button onClick={addConstraint}>Agregar Restricción</Button>
      <Button onClick={solveProblem}>Resolver</Button>
    </div>
  );
};

export default ProblemForm;
