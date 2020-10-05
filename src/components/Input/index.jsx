import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorMessage from "../../components/ErrorMessage";

import { StyledInputContainer } from "./styled-components";

const Input = ({
  values,
  errors,
  label,
  disableLabel,
  handleChange,
  handleClick,
  handleBlur,
  touched,
  type,
  className,
  id,
  placeholder,
  name,
  tabIndex,
  disableErrors,
  iconType,
  style,
  checked,
}) => {
  return (
    <StyledInputContainer>
      {disableLabel ? null : (
        <div className="label">
          <label htmlFor="">{label}</label>
          <FontAwesomeIcon icon={iconType} />
        </div>
      )}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        id={id}
        value={values}
        name={name}
        style={style}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={handleClick}
        tabIndex={tabIndex}
        error={touched && errors}
        checked={checked}
      />
      {disableErrors ? null : <ErrorMessage errorMessage={errors} />}
    </StyledInputContainer>
  );
};

export default Input;
