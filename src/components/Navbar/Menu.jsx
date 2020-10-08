import React from "react";
import Button from "../Button";

import { NAVBAR_TITLES, NAVBAR_AUTH_TITLES } from "../../constants";

import { StyledMenu, StyledLink } from "./styled-components";

const Menu = ({ pathname, display, history, token, openModal }) => {
  const onClickRedirect = () => {
    history.push("/login");
  };

  const activeHandler = (name) => {
    return name.includes(pathname) ? true : false;
  };

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
            {label.name}
          </StyledLink>
        </li>
      );
    });
  };
  return (
    <>
      <StyledMenu display={display}>
        {Object.keys(token).length
          ? handleMenu(NAVBAR_AUTH_TITLES)
          : handleMenu(NAVBAR_TITLES)}
        <li className="navbar-button-container">
          {Object.keys(token).length ? (
            <Button label={"Logout"} variant={"logout"} onClick={openModal} />
          ) : (
            <Button
              label={"Login"}
              variant={"login"}
              onClick={onClickRedirect}
            />
          )}
        </li>
      </StyledMenu>
    </>
  );
};

export default Menu;
