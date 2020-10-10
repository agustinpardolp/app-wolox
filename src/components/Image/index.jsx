import React from "react";
import PropTypes from "prop-types";
import { StyledImage } from "./styled-components";

const Image = ({
  width,
  height,
  border,
  bgCover,
  isRounded,
  imgLocation,
  children,
}) => {
  return (
    <StyledImage
      imgLocation={imgLocation}
      rounded={isRounded}
      width={width}
      height={height}
      border={border}
      bgCover={bgCover}
    >
      {children}
    </StyledImage>
  );
};

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
  bgCover: PropTypes.string,
  isRounded: PropTypes.bool,
  imgLocation: PropTypes.string,
  children: PropTypes.array,
};

export default React.memo(Image);
