import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";

const Technologies = () => {
  return (
    <StyledHomeWrapper
      paragraphSize={"2rem"}
      id="tecnologias"
      backgroundSize={"contain"}
    >
      <StyledDataWrapper>
        <p>
          <strong>
            {" "}
            Estamos buscando para incorporar gente increible para estas
            tecnologías:
          </strong>{" "}
        </p>
      </StyledDataWrapper>
      <StyledDataWrapper
        backgroundImage={"/images/Img Hero/Ic_Tecnologys.svg"}
        backgroundSize={"contain"}
      />
    </StyledHomeWrapper>
  );
};

export default Technologies;
