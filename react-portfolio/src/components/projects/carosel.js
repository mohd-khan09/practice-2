import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import blankImg from "../../images/rectangle.svg";
import desktop from "../../images/desktop.svg";
import java from "../../images/java.svg";
import "./carosel.css";

const initialData = [
  {
    id: 1,
    title: "Project 1",
    description: "its a flexbox demo",
    imageUrl: "https://drive.google.com/uc?export=view&id=18ogLwu3VLE0KdQgMAHRtyJcZAdT1YwZ6",
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/Traversy%20media",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/Traversy%20media/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "its a reusable js card",
    imageUrl: 'https://drive.google.com/uc?export=view&id=1txpayy8dIoXs3Ji2TWaRNIYpPmonvKZL',
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/card",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/card/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "its a calculator ",
    imageUrl: 'https://drive.google.com/uc?export=view&id=1EeiuY4ghJZ4QwLRRAVkMBRUcjDlZQk1d',
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/calcii",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/calcii/",
  },
  {
    title: "Project 4",
    description: "its a registraion and login form",
    imageUrl: "https://drive.google.com/uc?export=view&id=1kmeC2xaZpAs65TeIkEcP_ouxoWwLAoA_",
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/form",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/form/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "its a stop watch",
    imageUrl:"https://drive.google.com/uc?export=view&id=1xt2Vh4Q49lQDMBEuoyWPP6Mn4B3zw3rM",
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/stopwatch",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/stopwatch/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "its a todo app",
    imageUrl: "https://drive.google.com/uc?export=view&id=1xdqISw6MxWpHc8Xmy29IecCJeqpBeXc7",
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/todo-app",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/todo-app/",
  },
  {
    id: 7,
    title: "Project 7",
    description: "its a landing page",
    imageUrl: 'https://drive.google.com/uc?export=view&id=1sI3ZzjnYY71yjh7PgQOhBtQZ9tM8MhvV',
    githubLink: "https://github.com/mohd-khan09/practice-2/tree/master/vid ",
    projectLink: "https://practice-2-dbhmkhwiz-khans-projects-47a7bdf8.vercel.app/vid/",
  },
];

function Carosel() {
  const [data, SetData] = useState(initialData);
  const [startIndex, SetstartIndex] = useState(0);
  const nxtCard = () => {
    SetstartIndex(startIndex + 1);
  };
  const prevCard = () => {
    SetstartIndex(Math.max(0, startIndex - 1));
  };
  const titleStyles = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  };
  const descriptionStyles = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    width: "270px",
    paddingTop: "10px",
  };
  const visibleData = data.slice(startIndex, startIndex + 3);
  return (
    <div className="containerCarosel">
      <div className="carditem">
        <IconButton onClick={prevCard} disabled={startIndex === 0}>
          <ArrowBackIosIcon className="arrow-icon" />
        </IconButton>
        <Grid container>
          {visibleData.map((item) => (
            <Grid item key={item.id} style={{ margin: "0 22px" }}>
              <Card className="card">
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.title}
                  height="200"
                />
                <CardContent>
                  <Typography variant="h5" style={{ ...titleStyles }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ ...descriptionStyles }}
                  >
                    {item.description}
                  </Typography>
                  <div className="svgs">
                    <img className="desktop" src={desktop} alt="desktop" />
                    <img className="java" src={java} alt="java" />
                  </div>
                  <div className="icons" style={{ marginTop: "16px" }}>
                    <IconButton
                      color="primary"
                      aria-label="GitHub"
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      <a href={item.githubLink}>
                        <GitHubIcon className="icon-size" />
                      </a>
                    </IconButton>
                    <IconButton
                      color="primary"
                      aria-label="projectLink"
                      target="_blank"
                      style={{ color: "black" }}
                    >
                      <a href={item.projectLink}>
                        {" "}
                        <ArrowOutwardIcon className="icon-size" />
                      </a>
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={nxtCard} disabled={startIndex + 3 >= data.length}>
          <ArrowForwardIosIcon className="arrow-icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Carosel;
