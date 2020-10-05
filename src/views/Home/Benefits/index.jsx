import React from "react";
import { BENEFIT_LIST } from "../../../constants";
import Divider from "../../../components/Divider";
const Benefits = () => {
  return (
    <div className="home_benefits" id="beneficios">
      <p>
        Entre los beneficios que ofrecemos se encuentran{" "}
        <span className="home_span-primary">;)</span>
      </p>
      <div className="home_benefits_list-container">
        {BENEFIT_LIST.map((benefits) => {
          return (
            <div>
              <img src={`/images/Img Hero/${benefits.file}.svg`} alt="" />
              <label>{benefits.name}</label>
            </div>
          );
        })}
      </div>
      <Divider />
    </div>
  );
};

export default Benefits;
