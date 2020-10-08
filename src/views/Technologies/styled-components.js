import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants/index";

const StyledTechnologies = styled.section`
  min-height: 100vh;
  background-image: url("images/Backgrounds/Bg_Header.png");
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    margin: 5px;
  }
`;
const StyledContainer = styled.div`
  padding: 3%;

  li {
    list-style: none;
    text-align: center;
  }
`;

const StyledFormGroup = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  span {
    margin-left: 1rem;
  }
`;

const StyledLabel = styled.label`
  background: var(--backgroundProfile);
  ${(props) => (props.error ? "border: #f55757 solid 1px" : null)}
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid var(--backgroundProfile);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  :hover {
    background: var(--backgroundProfile);
    transition: 0.15s ease-in-out;
  }
`;
const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-row-gap: 1rem;
  height: 100%;
  padding-bottom: 1rem;
  h4 {
    font-size: 1.3rem;
    color: var(--primaryConfirm);
  }

  p,
  span {
    color: var(--primaryInputBorder);
    text-align: center;
    align-self: center;
    span {
      display: block;
    }
  }
`;

const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${DEVICES_MAX_WIDTH.tablet} {
    display: block;
  }
`;
const StyledTotal = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  color: var(--primaryConfirm);
`;
export {
  StyledContainer,
  StyledTechnologies,
  StyledFormGroup,
  StyledLabel,
  StyledInfoContainer,
  StyledSearchContainer,
  StyledTotal,
};
