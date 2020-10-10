/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  StyledHome,
  StyledHomeWrapper,
  StyledDataWrapper,
  StyledDivContainer,
} from "./styled-components";
import { TWITER_URL, WOLOX_URL } from "../../constants";
import ToastNotification from "../../components/ToastNotification";
import Button from "../../components/Button";
import Introduction from "./Introduction";
import Technologies from "./Technologies";
import Benefits from "./Benefits";
import Requirements from "./Requirements";

export const Home = () => {
  const handleRedirect = (ULR) => {
    return window.open(ULR);
  };

  return (
    <>
      <StyledHome>
        <Introduction />
        <Technologies />
        <StyledHomeWrapper
          paragraphSize={"3rem"}
          marginLeft={"5%"}
          marginRight={"5%"}
        >
          <StyledDataWrapper
            backgroundImage={"/images/Backgrounds/img_woloxer.png"}
          >
            <StyledDivContainer>
              <h2>
                <span className="home_span_confirm">350 +</span> Woloxers
              </h2>
              <div>
                <FontAwesomeIcon icon={faTwitter} />
                <span>@Wolox</span>
              </div>
              <Button
                label={"button.follow"}
                variant="neutral"
                onClick={() => handleRedirect(TWITER_URL)}
              />
            </StyledDivContainer>
          </StyledDataWrapper>

          <StyledDataWrapper background={"var(--inactiveColor)"}>
            <p>
              <FormattedMessage
                id="home.ideas"
                values={{
                  convertir: "convertir",
                  convert: "convert",
                  ideas: "ideas",

                  span: (word) => (
                    <span className="home_span-primary">{word}</span>
                  ),
                  code: (word) => (
                    <strong className="home_span_confirm">{word}</strong>
                  ),
                }}
              />
            </p>
          </StyledDataWrapper>
        </StyledHomeWrapper>
        <Benefits />
        <Requirements />
        <div className="home_final-content">
          <p>
            <FormattedMessage
              id="home.exercice"
              values={{
                completar: "completar el ejercicio",
                complete: "completing the exercise",
                span: (word) => (
                  <span className="home_span-primary">{word}</span>
                ),
              }}
            />
          </p>
          <span>
            <FormattedMessage id="home.more" />
          </span>
          <Button
            label={"button.more"}
            onClick={() => handleRedirect(WOLOX_URL)}
          />
        </div>
      </StyledHome>
    </>
  );
};
Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
