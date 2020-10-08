import React from "react";
import { StyledInput, StyledLabel, StyledCheckBox } from "./styled-components";

const CheckBox = ({ label, handleClick }) => {
  return (
    <StyledCheckBox>
      <StyledLabel>
        <label htmlFor="">{label}</label>
      </StyledLabel>
      <StyledInput type="checkbox" onClick={handleClick} />
    </StyledCheckBox>
  );
};

export default CheckBox;
