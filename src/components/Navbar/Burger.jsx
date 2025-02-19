import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledBarsIcon } from "./styled-components";
const Burger = ({ onClick }) => {
  return <StyledBarsIcon onClick={onClick} icon={faBars}></StyledBarsIcon>;
};

export default Burger;
