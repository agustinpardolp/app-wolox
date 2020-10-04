import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import Button from "../Button";
import Menu from "./Menu";
import { NAVBAR_TITLES } from "../../constants/";
import Burger from "./Burger";

export const Navbar = ({ location }) => {
  let { pathname } = location;
  let [showMenu, setShowMenu] = useState(false);
  let [hideOnScroll, sethideOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
      sethideOnScroll(true);
    else sethideOnScroll(false);
  };

  const handleShowMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <StyledNavbar showNavbar={hideOnScroll}>
      <div className="navbar-logo-container">
        <img src="images/logo_full_color.svg" alt="" />
        <Burger onClick={handleShowMobileMenu} />
      </div>
      <Menu pathname={pathname} display={showMenu} />
    </StyledNavbar>
  );
};
export default withRouter(Navbar);
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
