import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import Menu from "./Menu";
import { logout } from "../../store/actions/userActions/index";
import Burger from "./Burger";

export const Navbar = ({ location, history, token, logout }) => {
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
      <Menu
        pathname={pathname}
        display={showMenu}
        history={history}
        token={token}
        logout={logout}
      />
    </StyledNavbar>
  );
};
export const mapStateToProps = (state) => {
  const {
    user: { token },
  } = state;
  return {
    token,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
