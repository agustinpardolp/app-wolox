import React from "react";
import {
  StyledHomeWrapper,
  StyledFirstChild,
  StyledSecondChild,
} from "./styled-components";

const Introduction = () => {
  return (
    <StyledHomeWrapper paragraphSize={"3rem"}>
      <StyledFirstChild>
        <p>
          Bienvenido a tu <strong> Entrevista Tecnica</strong> en{" "}
          <span className="home_span_confirm">
            <strong> Wolox</strong>{" "}
          </span>
        </p>
      </StyledFirstChild>
      <StyledSecondChild
        backgroundImage={"/images/Img Hero/Ic_ilustra_Hero.png"}
      />
    </StyledHomeWrapper>
  );
};

export default Introduction;
