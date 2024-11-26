// src/components/LinearProgrammingForm/LinearProgrammingForm.tsx
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Layout from "../../components/Layout/Layout";

const LinearProgrammingForm: React.FC = () => {
  const [objectiveFunction, setObjectiveFunction] = useState<string>("");
  const [constraints, setConstraints] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);

      Tesseract.recognize(file, "eng", {
        logger: (m) => console.log(m)
      }).then(({ data: { text } }) => {
        console.log("Texto OCR:", text);
        // Procesar el texto obtenido de la imagen
        setObjectiveFunction(text); // Ajusta según cómo desees usarlo
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Función Objetivo:", objectiveFunction);
    console.log("Restricciones:", constraints);
    // Aquí puedes pasar los datos para resolver el problema
  };

  return (
    <Layout>
      <div style={{ padding: "1rem" }}>
        <h2>Formulario de Programación Lineal</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Función Objetivo:</label>
            <input
              type="text"
              value={objectiveFunction}
              onChange={(e) => setObjectiveFunction(e.target.value)}
              placeholder="Ejemplo: 3x + 4y"
            />
          </div>
          <div>
            <label>Restricciones:</label>
            {constraints.map((constraint, index) => (
              <input
                key={index}
                type="text"
                value={constraint}
                onChange={(e) =>
                  setConstraints((prev) =>
                    prev.map((c, i) => (i === index ? e.target.value : c))
                  )
                }
                placeholder="Ejemplo: x + y <= 5"
              />
            ))}
            <button
              type="button"
              onClick={() => setConstraints([...constraints, ""])}
            >
              Agregar Restricción
            </button>
          </div>
          <div>
            <label>Cargar Imagen:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          {uploadedImage && (
            <div>
              <h4>Vista previa de la imagen:</h4>
              <img
                src={uploadedImage}
                alt="Vista previa"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          )}
          <button type="submit">Resolver</button>
        </form>
      </div>
    </Layout>
  );
};

export default LinearProgrammingForm;
