import styled from "styled-components";

const StyledContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 10%;
  margin-right: 10%;
`;

const StyledFirstChild = styled.div`
  height: 30rem;
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.backgroundImage
      ? (props) => `url("${props.backgroundImage}") no-repeat center`
      : `url("images/Backgrounds/Bg_Header.png") no-repeat center`};
  p {
    font-size: ${(props) => props.fontSize && props.fontSize};
    width: 60%;
  }
  span {
    color: var(--secondColor);
  }
`;

const StyledSecondChild = styled.div`
  height: 30rem;
  background: ${(props) =>
    props.backgroundImage
      ? `url("${props.backgroundImage}") no-repeat center`
      : "#e5ebf1"};
`;

export { StyledContentWrapper, StyledFirstChild, StyledSecondChild };
