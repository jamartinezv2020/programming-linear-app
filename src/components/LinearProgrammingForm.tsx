import React, { useState } from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognition"; // Importar el hook

const LinearProgrammingForm: React.FC = () => {
  const { transcript, startRecognition } = useSpeechRecognition();
  const [objectiveFunction, setObjectiveFunction] = useState<string>("");
  const [constraints, setConstraints] = useState<string[]>([""]);
  const [solution, setSolution] = useState<string | null>(null);

  const handleObjectiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObjectiveFunction(e.target.value);
  };

  const handleConstraintChange = (index: number, value: string) => {
    const newConstraints = [...constraints];
    newConstraints[index] = value;
    setConstraints(newConstraints);
  };

  const handleAddConstraint = () => {
    setConstraints([...constraints, ""]);
  };

  const handleRemoveConstraint = (index: number) => {
    const newConstraints = constraints.filter((_, i) => i !== index);
    setConstraints(newConstraints);
  };

  const handleSubmit = () => {
    // Procesamos los datos y resolvemos el problema
    const problemData = {
      objectiveFunction,
      constraints
    };
    solveLinearProblem(problemData);
  };

  const solveLinearProblem = (data: {
    objectiveFunction: string;
    constraints: string[];
  }) => {
    // Aquí iría la lógica para resolver el problema utilizando glpk.js o cualquier otra librería de programación lineal
    const simulatedSolution = "Solución encontrada: Z=10, x=2, y=3";
    setSolution(simulatedSolution);
  };

  return (
    <div>
      <h2>Formulario de Programación Lineal</h2>
      <div>
        <label>Función Objetivo:</label>
        <input
          type="text"
          value={objectiveFunction}
          onChange={handleObjectiveChange}
          placeholder="Ejemplo: 3x + 2y"
        />
      </div>
      <div>
        <label>Restricciones:</label>
        {constraints.map((constraint, index) => (
          <div key={index}>
            <input
              type="text"
              value={constraint}
              onChange={(e) => handleConstraintChange(index, e.target.value)}
              placeholder={`Restricción ${index + 1}`}
            />
            {constraints.length > 1 && (
              <button onClick={() => handleRemoveConstraint(index)}>
                Eliminar
              </button>
            )}
          </div>
        ))}
        <button onClick={handleAddConstraint}>Agregar Restricción</button>
      </div>
      <button onClick={handleSubmit}>Resolver</button>
      <button onClick={startRecognition}>Hablar</button>
      {transcript && <p>Texto de voz: {transcript}</p>}

      {solution && (
        <div>
          <h3>Resultado:</h3>
          <p>{solution}</p>
        </div>
      )}
    </div>
  );
};

export default LinearProgrammingForm;
