import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";
import { FormattedMessage } from "react-intl";
const Introduction = () => {
  return (
    <StyledHomeWrapper paragraphSize={"3rem"} id="home">
      <StyledDataWrapper>
        <p className="text-light">
          <FormattedMessage
            id="home.welcome"
            values={{
              interview: "Entrevista Tecnica",
              code: (word) => <strong>{word}</strong>,
            }}
          />
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
