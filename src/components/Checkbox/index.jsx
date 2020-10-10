import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { StyledInput, StyledLabel, StyledCheckBox } from "./styled-components";

const CheckBox = ({ label, handleClick }) => {
  return (
    <StyledCheckBox>
      <StyledLabel>
        <label htmlFor="">
          <FormattedMessage id={label} />
        </label>
      </StyledLabel>
      <StyledInput type="checkbox" onClick={handleClick} />
    </StyledCheckBox>
  );
};

CheckBox.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
};

export default CheckBox;
