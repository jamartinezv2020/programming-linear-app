// src/components/Solver/Solver.tsx
import React, { useState } from "react";
import GraphDisplay from "../Graph/GraphDisplay";

const Solver: React.FC = () => {
  const [results, setResults] = useState<number[]>([10, 20, 30, 40, 50]); // Datos simulados

  return (
    <div>
      <h1>Solver Component</h1>
      <GraphDisplay results={results} /> {/* Pasa los datos correctamente */}
    </div>
  );
};

export default Solver;
