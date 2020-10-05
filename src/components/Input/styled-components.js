import styled from "styled-components";

const StyledInputContainer = styled.div`
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--primaryInputBorder);
  }

  input {
    ${(props) =>
      props.error ? "border: var(--primaryCancel) solid 1px" : null}
    width: 18rem;
    height: 2.2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--primaryInputBorder);
  }
`;

export { StyledInputContainer };
