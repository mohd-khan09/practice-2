import React from "react";
import circle from "../../images/img.svg";
import Line from "../../images/line.svg";
import Github from "../../images/github.svg";
import Linkdien from "../../images/linkdein.svg";
import vector1 from "../../images/sideelement.svg";
import { Typography } from "@mui/material";

import "./info.css";
function info() {
  return (
    <div className="info">
      <div className="presentation-box">
        <img className="profieimg" src={circle} alt="img" />
        <div className="alingment">
          <Typography className="desc-1">Hi,my name is</Typography>
          <Typography className="desc-2">Mohammed khan</Typography>
          <img className="line" src={Line} alt="line" />
          <div className="social-logo">
            <a href="https://github.com/mohd-khan09">
              <img className="github-logo" src={Github} alt="github-logo" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-khan-627402203/">
              <img
                className="linkdien-logo"
                src={Linkdien}
                alt="linkdien-logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="side-element">
        <img className="vector1" src={vector1} alt="" />
      </div>
    </div>
  );
}

export default info;
