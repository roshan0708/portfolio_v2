import React from "react";
import CardComponent from "./card-component";
import Pro1 from "../assets/img/project-1.jpg";
import Pro3 from "../assets/img/project-3.jpg";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="project"
    >
      <Fade left cascade>
        <section className="div-1">
          <h1 className="heading">Featured Projects..</h1>
          <div>
            {ProjectData.map((data, ind) => {
              const { github, external, img, title, text, skills } = data;
              return (
                <CardComponent
                  key={data + ind}
                  github={github}
                  external={external}
                  img={img}
                  title={title}
                  text={text}
                  skills={skills}
                />
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="https://github.com/roshan0708"
              target="_blank"
              rel="noopener noreferrer"
              type="button"
              className="btn btn-outline-light"
              style={{ width: "fit-content" }}
            >
              More Projects
            </a>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default Projects;

const ProjectData = [
  {
    title: "HealthDoc",
    img: "https://user-images.githubusercontent.com/60403638/118406404-93272600-b699-11eb-8609-3e222af021b1.png",
    skills: "React.js, Redux, SASS, Node.js, Express.js, MongoDB, and Django",
    github: "https://github.com/roshan0708/HealthDoc",
    text: "Designed and developed an ecommerce site where user can purchase clothes and make payments along with the signin and signup functionality.",
    external: "https://healthdoc.herokuapp.com/",
  },
  {
    title: "MeTalk",
    img: "https://user-images.githubusercontent.com/60403638/122263235-d58b8f00-cef3-11eb-88ff-a6172ed924b7.png",
    skills:
      "CSS, React.js, Redux, Semantic-UI-React, Semantic-UI-CSS, and Firebase",
    github: "https://github.com/roshan0708/MeTalk",
    text: "Created a group/one-to-one chat application using Firebase with capabilities of joining “groups” of other hosts.",
    external: "",
  },
  {
    title: "Ecommerce Site",
    img: Pro1,
    skills: "React.js, Redux, Firebase, Stripe API, SASS",
    github: "https://github.com/roshan0708/React-ecommerce",
    text: "Designed and developed an ecommerce site where user can purchase clothes and make payments along with the signin and signup functionality.",
    external: "https://crwn-live0708.herokuapp.com/",
  },
  {
    title: "Recipe App",
    img: Pro3,
    skills: "React.js, Edamam API",
    github: "https://github.com/roshan0708/recipe_app",
    text: "Constructed web app for searching recipe of a food item and displaying it in the form of tables.",
    external: "https://roshan0708.github.io/recipe_app/",
  },
];