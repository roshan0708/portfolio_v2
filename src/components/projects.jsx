import React from "react";
import CardComponent from "./card-component";
import Pro1 from "../assets/img/project-1.jpg";
import Pro2 from "../assets/img/project-2.jpg";
import Pro3 from "../assets/img/project-3.jpg";
import Pro4 from "../assets/img/project-4.jpg";
import {Fade} from 'react-reveal';

const Projects = () => {
  return (
    <div style={{ background: "#0b0b0d", color: "white" }} className="main-div" id="project">
    <Fade left cascade>
      <section className="div-1">
        <h1 className="heading">Some of my recent works..</h1>
        <div>
        {
            ProjectData.map((data,ind) => {
                const {github,external,img,title,text,skills} = data;
                return (
                    <CardComponent key={data+ind} github={github} external={external} img={img} title={title} text={text} skills={skills}/>
                )
            })
        }
        </div>
      </section>
      </Fade>
    </div>
  );
};

export default Projects;

const ProjectData = [
  {
    title: "Ecommerce Site",
    img: Pro1,
    skills: "React.js, Redux, Firebase, Stripe API, SCSS",
    github: "https://github.com/roshan0708/React-ecommerce",
    text:
      "Designed and developed an ecommerce site where user can purchase clothes and make payments along with the signin and signup functionality.",
    external: "https://crwn-live0708.herokuapp.com/",
  },
  {
    title: "Face Recognition App",
    img: Pro2,
    skills: "React.js, Node.js, Express.js, Clarifai API",
    github: "https://github.com/roshan0708/smart-brain/",
    text:
      "Made full-stack web application that identifies up to 8-10 faces present in the picture inserted using the Clarifai API.",
    external: "https://smart-brain0708.herokuapp.com/",
  },
  {
    title: "Recipe App",
    img: Pro3,
    skills: "React.js, Edamam API",
    github: "https://github.com/roshan0708/recipe_app",
    text:
      "Constructed web app for searching recipe of a food item and displaying it in the form of tables.",
    external: "https://roshan0708.github.io/recipe_app/",
  },
  {
    title: "Restaurant Management",
    img: Pro4,
    skills: "Jquery, Bootstrap",
    github: "https://github.com/roshan0708/restaurant_management_system",
    text:
      "Built a static restaurant management system using jquery and bootstrap",
    external: "https://roshan0708.github.io/restaurant_management_system/",
  },
];
