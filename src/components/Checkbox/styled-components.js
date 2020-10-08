import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledInput = styled.input`
  width: 5rem;
  height: 1.2rem;
  display: block;
  margin-top: 0.7rem;
  @media ${DEVICES_MAX_WIDTH.tablet} {
    justify-self: center;
  }
`;
const StyledCheckBox = styled.div`
  height: 4rem;
  display: grid;
  align-items: start;
`;
const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: var(--primaryInputBorder);
`;

export { StyledInput, StyledLabel, StyledCheckBox };
