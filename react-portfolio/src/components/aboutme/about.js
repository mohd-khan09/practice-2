import { Typography } from "@mui/material";
import React from "react";
import "./about.css";

const about = () => {
  return (
    <div className="sudo-container">
      <div className="container">
        <div className="content">
          <Typography className="about">About Me</Typography>
          <p>
            Aspiring to be an efficient software professional, I seek
            opportunities within an organization to apply my skills while
            fostering professional growth. With a strong foundation in web
            development and a deep enthusiasm for contributing to innovative
            projects, I am proficient in frontend technologies such as React and
            possess knowledge in back-end technologies like Node.js, Express,
            and MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
