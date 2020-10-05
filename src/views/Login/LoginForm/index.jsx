import React from "react";
import { StyledLogin, StyledInputContainer } from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";

const LoginForm = () => {
  return (
    <StyledLogin>
      <form>
        <div className="login-container">
          <h2>Login</h2>
          <StyledInputContainer>
            <div className="login-label">
              <label htmlFor="">Ingrese su Usuario</label>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input type="text" />
          </StyledInputContainer>
          <StyledInputContainer>
            <div className="login-label">
              <label htmlFor="">Ingrese su contraseña</label>
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input type="password" className="login-input" />
          </StyledInputContainer>

          <Button label={"Ingresar"} type={"confirm"} />

          <p>¿No tenés cuenta? Registrarte</p>
        </div>
      </form>
    </StyledLogin>
  );
};

export default LoginForm;
