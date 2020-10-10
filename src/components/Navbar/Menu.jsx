import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Button from "../Button";
import { Context } from "../LenguageWrapper";
import { NAVBAR_TITLES, NAVBAR_AUTH_TITLES } from "../../constants";

import { StyledMenu, StyledLink } from "./styled-components";

const Menu = ({ pathname, display, history, token, openModal }) => {
  const context = useContext(Context);

  let tokenData = JSON.parse(localStorage.getItem("token_data"));
  const onClickRedirect = () => {
    history.push("/login");
  };

  const activeHandler = (name) => {
    return name.includes(pathname) ? true : false;
  };
  const hasToken =
    Object.keys(token).length || (tokenData && Object.keys(tokenData).length);
  const handleMenu = (menuOptions) => {
    return menuOptions.map((label) => {
      return (
        <li key={label.name}>
          <StyledLink
            active={activeHandler(label.path)}
            to={label.path}
            key={label.name}
            smooth
          >
            <FormattedMessage id={`${label.name}`} />
          </StyledLink>
        </li>
      );
    });
  };

  return (
    <>
      <StyledMenu display={display}>
        {hasToken ? handleMenu(NAVBAR_AUTH_TITLES) : handleMenu(NAVBAR_TITLES)}
        <li className="navbar-button-container">
          {hasToken ? (
            <Button label={"Logout"} variant={"logout"} onClick={openModal} />
          ) : (
            <Button
              label={"Login"}
              variant={"login"}
              onClick={onClickRedirect}
            />
          )}
        </li>
        <li>
          <ul className="navbar-button_translation-container">
            <li value="en-us" onClick={context.changeLanguage}>
              <FormattedMessage id="header.english" />
            </li>
            <li value="en-es" onClick={context.changeLanguage}>
              <FormattedMessage id="header.spanish" />
            </li>
          </ul>
        </li>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  pathname: PropTypes.string,
  display: PropTypes.bool,
  history: PropTypes.object,
  token: PropTypes.object,
  openModal: PropTypes.func,
};

export default React.memo(Menu);
