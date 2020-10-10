import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEVICES_MAX_WIDTH } from "../../constants";
import { HashLink as Link } from "react-router-hash-link";

const StyledNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.showNavbar ? "0" : "1")};
  background-image: url("images/Backgrounds/Bg_Header.png");
  height: 5rem;
  padding: 2%;
  position: sticky;
  top: 0;
  transition: 1s;
  &&:hover {
    opacity: ${(props) => props.showNavbar && "1"};
    background: ${(props) => props.showNavbar && "var(--primaryInputBorder)"};
    transition: 1s;
    z-index: ${(props) => props.showNavbar && "10000"};
  }

  li:hover {
    color: var(--primary);
  }

  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: block;
    height: 100%;
  }

  .navbar-logo-container {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    img {
      width: 14rem;
    }
    @media ${DEVICES_MAX_WIDTH.laptop} {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding: 2%;
      img {
        width: 10rem;
      }
    }
  }
  .navbar-button-container {
    display: flex;
    justify-content: center;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "var(--primary)" : "var(--thirdColor)")};
`;
const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    flex: auto;
    cursor: pointer;
    padding: 1.5rem;
    flex: auto;
    text-align: center;
  }
  .navbar-button_translation-container {
    display: flex;
    list-style: none;
    li {
      color: var(--primaryConfirm);
    }
    @media ${DEVICES_MAX_WIDTH.laptop} {
      display: flex;
      li {
        padding: 0;
      }
    }
  }

  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: ${(props) => (props.display ? "block" : "none")};
    height: 50vh;

    background: #f7f7f7;
    position: relative;

    li {
      &&:hover {
        background: "var(--primary)";
        transition: 1s;
      }
    }
  }
`;

const StyledBarsIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  display: none;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    /* flex-flow: column nowrap; */
    display: inline;
  }
`;
export { StyledNavbar, StyledMenu, StyledBarsIcon, StyledLink };
