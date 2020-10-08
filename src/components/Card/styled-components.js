import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants/index";

const StyledCard = styled.div`
  position: relative;
  display: ${(props) => (props.fullSize ? "inherit" : "grid")};
  grid-template-rows: 2fr 1fr;
  grid-row-gap: 2rem;
  padding: 2%;
  width: 18rem;
  height: 23rem;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  margin: 2rem;
  text-align: center;
  background: var(--backgroundLightColor);
  @media ${DEVICES_MAX_WIDTH.mobileM} {
    margin: 0;
  }
`;

const StyledCategoryTittle = styled.div`
  text-decoration: none !important;
  transition: all 0.5s;
  position: absolute;
  color: var(--mainColorFont) !important;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  :hover {
    color: var(--mainColorFont);
    transition: all 0.4s ease 0s;
  }
`;

export { StyledCard, StyledCategoryTittle };
