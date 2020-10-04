import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { NAVBAR_TITLES } from "../../constants";

import { StyledMenu } from "./styled-components";

const Menu = ({ pathname, display }) => {
  return (
    <>
      <StyledMenu display={display}>
        {NAVBAR_TITLES.map((label) => {
          return (
            <li>
              <Link
                active={pathname.includes(label.path)}
                to={label.path}
                key={label.name}
              >
                {label.name}
              </Link>
            </li>
          );
        })}
        <li className="navbar-button-container">
          <Button label={"Login"} type={"login"} />
        </li>
      </StyledMenu>
    </>
  );
};

export default Menu;
