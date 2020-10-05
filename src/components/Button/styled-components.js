import styled from "styled-components";

const StyledButton = styled.button`
  width: 10rem;
  height: 1rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border: 2px solid
    ${(props) => (props.borderColor ? props.borderColor : "var(--primary)")};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.fontColor ? props.fontColor : "var(--primary)")};
  font-size: 1rem;
  padding: 1.2rem;
  transition: 1s;
  outline: none;
  &&:hover {
    background: ${(props) =>
      props.borderColor ? props.borderColor : "var(--primary)"};
    color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "white"};
    transition: 1s;
  }
`;

export { StyledButton };
