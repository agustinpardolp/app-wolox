import React from "react";
import Button from "../Button";
import { StyledModal } from "./styled-components";

const Modal = ({ onConfirm, onHide, show, label }) => {
  return (
    <>
      {show ? (
        <StyledModal>
          <div className="modal_label-container">
            <p>{label}</p>
          </div>
          <div className="modal_button-group">
            <Button
              variant="confirm"
              label="Confirmar"
              onClick={onConfirm}
            ></Button>
            <Button variant="cancel" label="Cancel" onClick={onHide}></Button>
          </div>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;
