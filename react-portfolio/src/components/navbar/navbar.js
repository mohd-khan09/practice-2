import React from "react";
import uk_img from "../../images/uk_img.svg";
import downArrow from "../../images/down_arrow.svg";
import buleDot from "../../images/blueDot.svg";
import "./navbar.css";
import { Typography } from "@mui/material";
function navbar() {
  return (
    <div className="navbar">
      <img id="bule-dot" src={buleDot} alt="blue dot" />
      <div className="nav">
        <Typography className="nav-item">About me</Typography>
        <Typography className="nav-item">Specializations</Typography>
        <Typography className="nav-item">Projects</Typography>
        <Typography className="nav-item">Contact</Typography>
      </div>
      <div className="language-container">
        <img className="uk-img" src={uk_img} alt="uk image" />
        <Typography className="typo-eng">English</Typography>
        <img className="down-arrow" src={downArrow} alt="arrow down" />
      </div>
    </div>
  );
}

export default navbar;
