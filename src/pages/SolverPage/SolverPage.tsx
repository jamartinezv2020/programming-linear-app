// src/pages/SolverPage/SolverPage.tsx
import React from "react";
import Solver from "../../components/Solver/Solver";
import "../../styles/SolverPage.css";

const SolverPage: React.FC = () => {
  return (
    <div className="solver-page">
      <Solver />
    </div>
  );
};

export default SolverPage;
