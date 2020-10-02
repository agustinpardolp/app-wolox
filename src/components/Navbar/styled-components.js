import styled from "styled-components";

const StyledNavbar = styled.header`
  height: 5rem;
  width: 100%;
  background-image: url("images/Backgrounds/Bg_Header@3x.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 5%;
  margin-right: 5%;


  .navbar-logo-container {
    img {
      width: 40%;
    }
  }
  .navbar-button-container{
    width: 30%;
    display: flex;
    justify-content: center;
}
  }

  ul {
    list-style: none;
    display: flex;
    width: 50%;
    justify-content: flex-end;
    a {
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 500;
      margin-right:2rem;
      color: var(--thirdColor)
    }
  }
  /* 
  transition: ${(props) => `${props.pageTransition}`};
  text-align: center;
  transition-delay: 300ms; */
`;

export { StyledNavbar };
