import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  background: #ffffff;
  border: 1px solid lightgray;
  left: 35%;
  top: 200px;
  height: 14rem;
  width: 25rem;
  display: grid;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1%;
  border-radius: 8px;
  z-index: 200000000;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  .modal_label-container {
    p {
      text-align: center;
    }
  }
  .modal_button-group {
    display: flex;
    justify-content: center;
    button {
      margin: 1%;
    }
  }
`;

export { StyledModal };
