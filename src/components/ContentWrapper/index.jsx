import React from "react";
import {
  StyledContentWrapper,
  StyledFirstChild,
  StyledSecondChild,
} from "./styled-components";

const ContentWrapper = ({
  label,
  children,
  imageFirstChild,
  imageSecondChild,
  background,
  display,
  fontSize,
}) => {
  return (
    <StyledContentWrapper>
      <StyledFirstChild
        fontSize={fontSize}
        display={display}
        // background={background}
        backgroundImage={imageFirstChild}
      >
        {children ? (
          <>{children}</>
        ) : (
          <p>
            <strong> {label}</strong>{" "}
          </p>
        )}
      </StyledFirstChild>
      <StyledSecondChild
        // background={background}
        backgroundImage={imageSecondChild}
      />
    </StyledContentWrapper>
  );
};

export default ContentWrapper;
