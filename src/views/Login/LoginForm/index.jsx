import React, { useCallback } from "react";
import { StyledLogin } from "./styled-components";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = ({ values, handleChange, handleSubmit, errors, history }) => {
  const errorsFormHandler = useCallback(() => {
    return Object.entries(errors).length > 0;
  }, [errors]);

  const handleLoginSubmit = useCallback(
    (e) => {
      e.preventDefault();
      !errorsFormHandler() && handleSubmit();
    },
    [errorsFormHandler, handleSubmit]
  );

  return (
    <StyledLogin>
      <form onSubmit={handleLoginSubmit}>
        <div className="login-container">
          <h2>Login</h2>
          <Input
            name={"email"}
            label={"Ingrese su Usuario"}
            handleChange={handleChange}
            iconType={faUser}
            type={"text"}
            values={values.email}
            errors={errors.email}
          />
          <Input
            name={"password"}
            label={"Ingrese su contraseña"}
            handleChange={handleChange}
            iconType={faLock}
            type={"password"}
            values={values.password}
            errors={errors.password}
          />
          <Button
            label={"Ingresar"}
            type={!errorsFormHandler() ? "submit" : "text"}
            styleClass={!errorsFormHandler() ? "confirm" : "disabled"}
          />
          <div className="login_checkbox-container">
            <p>Deseo mantener mi sesión conectada</p>
            <input
              name={"rememberUser"}
              type="checkbox"
              value={values.rememberUser}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </StyledLogin>
  );
};

export default LoginForm;
