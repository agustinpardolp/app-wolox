import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  StyledHome,
  StyledHomeWrapper,
  StyledFirstChild,
  StyledSecondChild,
  StyledDivContainer,
} from "./styled-components";
import { BENEFIT_LIST } from "../../constants";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

export const Home = () => {
  return (
    <StyledHome>
      <StyledHomeWrapper paragraphSize={"2rem"}>
        <StyledFirstChild>
          <p>
            <strong>
              {" "}
              Estamos buscando para incorporar gente increible para estas
              tecnologías:
            </strong>{" "}
          </p>
        </StyledFirstChild>
        <StyledFirstChild
          backgroundImage={"/images/Img Hero/Ic_Tecnologys.svg"}
        />
      </StyledHomeWrapper>
      <StyledHomeWrapper
        paragraphSize={"3rem"}
        marginLeft={"5%"}
        marginRight={"5%"}
      >
        <StyledFirstChild
          backgroundImage={"/images/Backgrounds/img_woloxer.png"}
          backgroundCover={true}
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
        </StyledFirstChild>
        <StyledFirstChild background={"var(--inactiveColor)"}>
          <p>
            Trabajamos para <span className="home_span-primary">convertir</span>{" "}
            <span className="home_span_confirm">ideas</span> en productos
          </p>
        </StyledFirstChild>
      </StyledHomeWrapper>
      <div className="home_benefits">
        <h2>
          Entre los beneficios que ofrecemos se encuentran{" "}
          <span className="home_span-primary">;)</span>
        </h2>
        <div className="home_benefits_list-container">
          {BENEFIT_LIST.map((benefits) => {
            return (
              <div>
                <img src={`/images/Img Hero/${benefits.file}.svg`} alt="" />
                <label>{benefits.name}</label>
              </div>
            );
          })}
        </div>
        <Divider />
      </div>
      <StyledHomeWrapper paragraphSize={"2.5rem"}>
        <StyledFirstChild height={"20rem"}>
          <p>
            <strong> Requerimientos</strong>
          </p>
        </StyledFirstChild>
        <StyledFirstChild>
          <ul className="home_requirements-list">
            <li>
              Estudiantes avanzados o recibidos de carreras del rubro
              informático, sistemas o electronicos
            </li>
            <li>Ingles intermedio/avanzado</li>
            <li>Conocimiento en metodologias ágiles (deseable)</li>
          </ul>
        </StyledFirstChild>
      </StyledHomeWrapper>
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
