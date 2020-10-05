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
          Estamos buscando para incorporar gente increible para estas
          tecnologías:
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
