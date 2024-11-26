// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Form from "./pages/Form/Form";
import ProblemDisplay from "./components/ProblemDisplay/ProblemDisplay";
import SolutionSteps from "./components/SolutionSteps/SolutionSteps";
import FeasibleRegion from "./components/FeasibleRegion/FeasibleRegion";
import Graphics from "./pages/Graphics/Graphics";
import Boards from "./pages/Boards/Boards";
import SensitivityAnalysis from "./components/SensitivityAnalysis/SensitivityAnalysis";
import Footer from "./components/Footer/Footer"; // Importamos el Footer
import LinearProgrammingForm from "./components/LinearProgrammingForm/LinearProgrammingForm"; // Importamos el formulario

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="app">
        <NavBar toggleSidebar={toggleSidebar} />
        <div style={{ display: "flex" }}>
          {isSidebarOpen && <Sidebar />}
          <div style={{ flexGrow: 1, padding: "1rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<Form />} />
              <Route path="/problem-display" element={<ProblemDisplay />} />
              <Route path="/solution-steps" element={<SolutionSteps />} />
              <Route path="/feasible-region" element={<FeasibleRegion />} />
              <Route path="/graphics" element={<Graphics />} />
              <Route path="/boards" element={<Boards />} />
              <Route
                path="/sensitivity-analysis"
                element={<SensitivityAnalysis />}
              />
              {/* Nueva ruta para el formulario de programación lineal */}
              <Route
                path="/linear-programming-form"
                element={<LinearProgrammingForm />}
              />
            </Routes>
          </div>
        </div>
      </div>
      <div>
        <Footer /> {/* Agregamos el Footer aquí */}
      </div>
    </Router>
  );
};

export default App;
