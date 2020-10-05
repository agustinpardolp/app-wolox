import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";
const Requirements = () => {
  return (
    <StyledHomeWrapper paragraphSize={"2.5rem"} id="requerimientos">
      <StyledDataWrapper height={"20rem"}>
        <p>Requerimientos</p>
      </StyledDataWrapper>
      <StyledDataWrapper>
        <ul className="home_requirements-list">
          <li>
            <img src="/images/Bullets/Ic_Bullet_1.svg" alt="" /> Estudiantes
            avanzados o recibidos de carreras del rubro informático, sistemas o
            electronicos
          </li>
          <li>
            <img src="/images/Bullets/Ic_Bullet_2.svg" alt="" />
            Ingles intermedio/avanzado
          </li>
          <li>
            <img src="/images/Bullets/Ic_Bullet_3.svg" alt="" />
            Conocimiento en metodologias ágiles (deseable)
          </li>
        </ul>
      </StyledDataWrapper>
    </StyledHomeWrapper>
  );
};

export default Requirements;
