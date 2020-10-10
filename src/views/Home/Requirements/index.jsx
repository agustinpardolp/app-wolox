import React from "react";
import { StyledHomeWrapper, StyledDataWrapper } from "../styled-components";
import { FormattedMessage } from "react-intl";
const Requirements = () => {
  return (
    <StyledHomeWrapper paragraphSize={"2.5rem"} id="requerimientos">
      <StyledDataWrapper height={"20rem"}>
        <p>
          <FormattedMessage id="home.requirements" />
        </p>
      </StyledDataWrapper>
      <StyledDataWrapper>
        <ul className="home_requirements-list">
          <li>
            <img src="/images/Bullets/Ic_Bullet_1.svg" alt="" />{" "}
            <FormattedMessage id="home.students" />
          </li>
          <li>
            <img src="/images/Bullets/Ic_Bullet_2.svg" alt="" />
            <FormattedMessage id="home.english" />
          </li>
          <li>
            <img src="/images/Bullets/Ic_Bullet_3.svg" alt="" />
            <FormattedMessage id="home.agile" />
          </li>
        </ul>
      </StyledDataWrapper>
    </StyledHomeWrapper>
  );
};

export default Requirements;
