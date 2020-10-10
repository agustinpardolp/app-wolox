import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import { useModal } from "../../hooks";
import { logout } from "../../store/actions/userActions/index";
import Modal from "../Modal";
import Menu from "./Menu";
import Burger from "./Burger";
import BrandLogo from "../../assets/images/logo_full_color.svg";

export const Navbar = ({ location, history, token, logout }) => {
  let { pathname, hash } = location;
  let [showMenu, setShowMenu] = useState(false);
  let [hideOnScroll, sethideOnScroll] = useState(false);

  const onScroll = useCallback(() => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
      sethideOnScroll(true);
    else sethideOnScroll(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);
  const { showModal, hideModal, openModal } = useModal(false);

  const handleLogout = useCallback(() => {
    hideModal();
    logout();
    history.push("/home");
  }, [hideModal, history, logout]);

  const handleShowMobileMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <>
      <StyledNavbar showNavbar={hideOnScroll}>
        <div className="navbar-logo-container">
          <img src={BrandLogo} alt="" />
          <Burger onClick={handleShowMobileMenu} />
        </div>
        <Menu
          pathname={hash || pathname}
          display={showMenu}
          history={history}
          token={token}
          logout={logout}
          openModal={openModal}
        />
      </StyledNavbar>
      <Modal
        show={showModal}
        onConfirm={handleLogout}
        onHide={hideModal}
        label="modal.message"
      />
    </>
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
Navbar.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  token: PropTypes.object,
  logout: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withRouter(
    React.memo(Navbar, (prevProps, nextProps) => {
      return prevProps.location === nextProps.location;
    })
  )
);
