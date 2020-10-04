import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";

const Introduction = () => {
  return (
    <StyledHomeWrapper paragraphSize={"3rem"} id="home">
      <StyledDataWrapper>
        <p>
          Bienvenido a tu <strong> Entrevista Tecnica</strong> en{" "}
          <span className="home_span_confirm">
            <strong> Wolox</strong>{" "}
          </span>
        </p>
      </StyledDataWrapper>
      <StyledDataWrapper
        backgroundImage={"/images/Img Hero/Ic_ilustra_Hero.png"}
        backgroundSize={"contain"}
      />
    </StyledHomeWrapper>
  );
};

export default Introduction;
