import React from "react";
import "../../styles/Footer.css"; // Asegúrate de tener este archivo CSS para los estilos

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © 2024 José Alfredo Martínez Valdés | Programming Linear | Todos los
          derechos reservados
        </p>
        <div className="footer-links">
          <a href="/privacy-policy">Política de Privacidad</a>
          <a href="/terms-of-service">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
