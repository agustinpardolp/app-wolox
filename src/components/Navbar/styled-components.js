import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledNavbar = styled.header`
  background-image: url("images/Backgrounds/Bg_Header.png");
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  height: 8rem;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    /* flex-flow: column nowrap; */
    display: block;
  }

  .navbar-logo-container {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    img {
      width: 14rem;
    }
    @media ${DEVICES_MAX_WIDTH.laptop} {
      height: 5rem;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      padding-left: 2%;
      padding-right: 2%;
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
    z-index: 10000000;
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
