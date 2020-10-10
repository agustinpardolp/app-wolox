import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { StyledLogin } from "./styled-components";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const LoginForm = ({ values, handleChange, handleSubmit, errors }) => {
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
          <h2>
            <FormattedMessage id="login.loginTitle" />
          </h2>
          <Input
            name={"email"}
            label={"login.user"}
            handleChange={handleChange}
            iconType={faUser}
            type={"text"}
            values={values.email}
            errors={errors.email}
          />
          <Input
            name={"password"}
            label={"login.password"}
            handleChange={handleChange}
            iconType={faLock}
            type={"password"}
            values={values.password}
            errors={errors.password}
          />
          <Button
            label={"button.enter"}
            type={!errorsFormHandler() ? "submit" : "text"}
            variant={!errorsFormHandler() ? "confirm" : "disabled"}
          />
          <div className="login_checkbox-container">
            <p>
              <FormattedMessage id="login.session" />
            </p>
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

LoginForm.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
};

export default LoginForm;
