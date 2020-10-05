import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../Button";
import { NAVBAR_TITLES } from "../../constants";

import { StyledMenu } from "./styled-components";

const Menu = ({ pathname, display, history }) => {
  const onClickRedirect = () => {
    history.push("/login");
  };
  return (
    <>
      <StyledMenu display={display}>
        {NAVBAR_TITLES.map((label) => {
          return (
            <li key={label.name}>
              <Link
                active={pathname.includes(label.path)}
                to={label.path}
                key={label.name}
                smooth
              >
                {label.name}
              </Link>
            </li>
          );
        })}
        <li className="navbar-button-container">
          <Button label={"Login"} type={"login"} onClick={onClickRedirect} />
        </li>
      </StyledMenu>
    </>
  );
};

export default Menu;
