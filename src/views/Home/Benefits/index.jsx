import React from "react";
import { BENEFIT_LIST } from "../../../constants";
import Divider from "../../../components/Divider";
import { FormattedMessage } from "react-intl";

const Benefits = () => {
  return (
    <div className="home_benefits" id="beneficios">
      <p>
        <FormattedMessage id="home.benefits" />
        <span className="home_span-primary">;)</span>
      </p>
      <div className="home_benefits_list-container">
        {BENEFIT_LIST.map((benefits) => {
          return (
            <div key={benefits.name}>
              <img src={`/images/Img Hero/${benefits.file}.svg`} alt="" />
              <label>
                <FormattedMessage id={`${benefits.name}`} />
              </label>
            </div>
          );
        })}
      </div>
      <Divider />
    </div>
  );
};

export default Benefits;
