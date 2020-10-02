import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import Button from "../Button";
import { NAVBAR_TITLES } from "../../constants/";

export const Navbar = ({ location }) => {
  let { pathname } = location;
  return (
    <StyledNavbar>
      <div className="navbar-logo-container">
        <img src="images/logo_full_color.svg" alt="" />
      </div>
      <ul>
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
      </ul>
      <div className="navbar-button-container">
        <Button label={"Login"} />
      </div>
    </StyledNavbar>
  );
};
export default withRouter(Navbar);
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
