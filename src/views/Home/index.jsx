import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  StyledHome,
  StyledHomeWrapper,
  StyledDataWrapper,
  StyledDivContainer,
} from "./styled-components";
import { BENEFIT_LIST } from "../../constants";
import Button from "../../components/Button";
import Introduction from "./Introduction";
import Technologies from "./Technologies";
import Benefits from "./Benefits";
import Requirements from "./Requirements";

export const Home = () => {
  return (
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
            <Button label={"Siguenos"} type={"neutral"} />
          </StyledDivContainer>
        </StyledDataWrapper>
        <StyledDataWrapper background={"var(--inactiveColor)"}>
          <p>
            Trabajamos para <span className="home_span-primary">convertir</span>{" "}
            <span className="home_span_confirm">ideas</span> en productos
          </p>
        </StyledDataWrapper>
      </StyledHomeWrapper>
      <Benefits />
      <Requirements id="requerimientos" />
      <div className="home_final-content">
        <h2>
          Gracias por{" "}
          <span className="home_span-primary">completar el ejercicio</span>
        </h2>
        <span>Te invitamos a ver mas informacion</span>
        <Button label={"Conoce mas"} />
      </div>
    </StyledHome>
  );
};
export default Home;
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
