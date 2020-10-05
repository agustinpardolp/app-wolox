import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledNavbar = styled.header`
  display: flex;
  justify-content: space-around;
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
    background: ${(props) => props.showNavbar && "var(--backgroundHover)"};
    transition: 1s;
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
  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;

    color: var(--thirdColor);
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    display: ${(props) => (props.display ? "block" : "none")};
    height: 46vh;

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
export { StyledNavbar, StyledMenu, StyledBarsIcon };
