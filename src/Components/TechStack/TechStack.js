import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Typescript",
    },
    {
      name: "Javascript",
    },
    {
      name: "React JS",
    },
    {
      name: "Redux-Toolkit",
    },

    {
      name: "Context API",
    },
    {
      name: "Node JS",
    },
    {
      name: "Express JS",
    },
    {
      name: "MongoDB",
    },
    {
      name: "AWS S3",
    },
    {
      name: "AWS SES",
    },
    {
      name: "Unit testing (Mocha and Chai)",
    },
    {
      name: "Jest",
    },
    {
      name: "Git and Github",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "REST API",
    },
    {
      name: "Chart.JS",
    },
    {
      name: "Material UI",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "SCSS",
    },
    {
      name: "Storybook",
    },
    {
      name: "JIRA Board",
    },
    {
      name: "UI/UX Design",
    },
    {
      name: "Figma",
    },
    {
      name: "Adobe xd",
    },
  
    {
      name: "Vercel",
    },
    {
      name: "Netlify",
    },
    {
      name: "Heroku",
    },
  




  ];

  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };  

  return (
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <Fade right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === 0
                    ? "tech-content-marked tech-content"
                    : "tech-content"
                }
              >
                <span
                  className="tech-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  {index + 1}
                </span>
                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      {showMoreTechStack >= data.length ? null : (
        <Zoom>
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </Zoom>
      )}
    </div>
  );
};

export default TechStack;
