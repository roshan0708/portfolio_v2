import React from "react";
import { गति } from "framer-motion";
import { fromDown, fromLeft, fromRight, scale } from "./animations";
import { projects } from "../data";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="project-details"
    >
      <motion.div variants={scale} className="project-details__image">
        <img src={project.image} alt={project.name} />
      </motion.div>
      <div className="project-details__content">
        <motion.h1 variants={fromLeft} className="project-details__title">
          {project.name}
        </motion.h1>
        <motion.p variants={fromRight} className="project-details__description">
          {project.description}
        </motion.p>
        <motion.div variants={fromDown} className="project-details__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-details__tag">
              {tag}
            </span>
          ))}
        </motion.div>
        <motion.a
          variants={fromDown}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-details__link"
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
