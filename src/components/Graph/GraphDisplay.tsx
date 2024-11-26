// src/components/Graph/GraphDisplay.tsx
import "../../styles/GraphDisplay.css";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Define la interfaz para las props del componente
interface GraphDisplayProps {
  results: number[]; // Arreglo de números para los datos del gráfico
}

const GraphDisplay: React.FC<GraphDisplayProps> = ({ results }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current; // Captura la referencia del canvas
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const chartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels: results.map((_, index) => `Point ${index + 1}`), // Etiquetas generadas dinámicamente
            datasets: [
              {
                label: "Results Dataset",
                data: results,
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)"
              }
            ]
          },
          options: {
            scales: {
              x: { title: { display: true, text: "X Axis" } },
              y: { title: { display: true, text: "Y Axis" } }
            }
          }
        });

        // Cleanup: destruye el gráfico
        return () => {
          chartInstance.destroy();
        };
      }
    }
  }, [results]); // Agrega `results` como dependencia

  return <canvas ref={canvasRef}></canvas>;
};

export default GraphDisplay;
