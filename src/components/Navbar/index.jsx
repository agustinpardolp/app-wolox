import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { StyledNavbar } from "./styled-components";
import { useModal } from "../../hooks";
import Modal from "../../components/Modal";
import Menu from "./Menu";
import { logout } from "../../store/actions/userActions/index";
import Burger from "./Burger";
import BrandLogo from "../../assets/images/logo_full_color.svg";

export const Navbar = ({ location, history, token, logout }) => {
  let { pathname, hash } = location;
  let [showMenu, setShowMenu] = useState(false);
  let [hideOnScroll, sethideOnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  const { showModal, hideModal, openModal } = useModal(false);
  const onScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
      sethideOnScroll(true);
    else sethideOnScroll(false);
  };
  const handleLogout = () => {
    hideModal();
    logout();
    history.push("/#home");
  };
  const handleShowMobileMenu = () => {
    setShowMenu(!showMenu);
  };

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
        label={"¿Esta seguro que desea salir?"}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
