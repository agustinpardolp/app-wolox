import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";
import { FormattedMessage } from "react-intl";
const Technologies = () => {
  return (
    <StyledHomeWrapper
      paragraphSize={"2rem"}
      id="tecnologias"
      backgroundSize={"contain"}
    >
      <StyledDataWrapper>
        <p>
          <FormattedMessage id="home.tecnologies" />
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
