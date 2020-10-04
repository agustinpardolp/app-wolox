import React from "react";
import { StyledButton } from "./styled-components";

const Button = ({ label, onClick, type }) => {
  const buttonTypeSelector = (type) => {
    let settings = {
      borderColor: "var(--primary)",
      fontColor: "white",
      backgroundColor: "var(--primary)",
    };
    switch (type) {
      case "confirm":
        settings = {
          borderColor: "var(--primaryConfirm)",
          fontColor: "white",
          backgroundColor: "var(--primaryConfirm)",
        };
        break;
      case "cancel":
        settings = {
          borderColor: "var(--primaryCancel)",
          fontColor: "white",
          backgroundColor: "var(--primaryCancel)",
        };
        break;
      case "neutral":
        settings = {
          borderColor: "var(--primary)",
          fontColor: "white",
          backgroundColor: "none",
        };
        break;
      case "login":
        settings = {
          borderColor: "var(--primary)",
          fontColor: "var(--primary)",
          backgroundColor: "white",
        };
        break;
      default:
        return settings;
    }

    return settings;
  };
  let buttonSetup = buttonTypeSelector(type);
  return (
    <StyledButton
      onClick={onClick}
      borderColor={buttonSetup.borderColor}
      fontColor={buttonSetup.fontColor}
      backgroundColor={buttonSetup.backgroundColor}
    >
      {label}
    </StyledButton>
  );
};
export default Button;
