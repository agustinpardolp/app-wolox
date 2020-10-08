import React from "react";
import { StyledFooter } from "./styled-components";
import BrandFooter from "../../assets/images/Ic_Wolox_Footer.svg";
const Footer = () => {
  return (
    <StyledFooter>
      <img src={BrandFooter} alt="" />
    </StyledFooter>
  );
};

export default Footer;
