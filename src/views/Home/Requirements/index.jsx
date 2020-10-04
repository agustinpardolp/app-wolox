import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";
const Requirements = () => {
  return (
    <StyledHomeWrapper paragraphSize={"2.5rem"} id="requerimientos">
      <StyledDataWrapper height={"20rem"}>
        <p>
          <strong> Requerimientos</strong>
        </p>
      </StyledDataWrapper>
      <StyledDataWrapper>
        <ul className="home_requirements-list">
          <li>
            Estudiantes avanzados o recibidos de carreras del rubro informático,
            sistemas o electronicos
          </li>
          <li>Ingles intermedio/avanzado</li>
          <li>Conocimiento en metodologias ágiles (deseable)</li>
        </ul>
      </StyledDataWrapper>
    </StyledHomeWrapper>
  );
};

export default Requirements;
