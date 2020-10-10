import React, { useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  position: absolute;
  right: 50%;
  top: 40%;
  margin: 0 auto;
  border-color: var(--primaryConfirm);
`;

const Spinner = () => {
  let [loading] = useState(true);

  return (
    <div className="sweet-loading">
      <ClipLoader
        css={override}
        size={50}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
};

export default Spinner;
