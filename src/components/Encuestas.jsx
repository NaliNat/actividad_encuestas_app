import React from "react";
import "./Encuestas.css";
function Encuestas({ encuestas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <li key={encuesta.id} className="preguntas">
            {encuesta.pregunta}
            <ul>
              {encuesta.opciones.map((opcion) => (
                <li key={opcion} className="respuestas">
                  {opcion}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Encuestas;
