import React from "react";
import Image from "../Image";
import Button from "../Button";
import PropTypes from "prop-types";
import { OverlayAnimation } from "../../utils/animations";
import { StyledCard, StyledCategoryTittle } from "./styled-components";

const Card = ({ imgUrl, disableInfo, children, disableAnimation }) => {
  return (
    <StyledCard fullSize={disableInfo}>
      <Image imgLocation={imgUrl} border={"none"} height={"100%"}>
        {" "}
        {disableAnimation ? null : (
          <OverlayAnimation>
            <StyledCategoryTittle fontSize={"20px"}>
              <Button variant="neutral" label={"button.info"}></Button>
            </StyledCategoryTittle>
          </OverlayAnimation>
        )}
      </Image>
      {disableInfo ? null : children}
    </StyledCard>
  );
};

Card.propTypes = {
  imgUrl: PropTypes.string,
  disableInfo: PropTypes.bool,
  children: PropTypes.object,
  disableAnimation: PropTypes.bool,
};

export default Card;
