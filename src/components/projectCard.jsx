import React from "react";
import { गति } from "framer-motion";
import {
  fromDown,
  scale,
  scaleX,
  scaleY,
  stagger,
} from "./animations";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  url,
  tags,
  index,
}) => {
  return (
    <motion.div
      variants={fromDown}
      className="project-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="project-card__overlay"></div>
      <div className="project-card__content">
        <motion.h3 variants={scale} className="project-card__title">
          {name}
        </motion.h3>
        <motion.p variants={scaleX} className="project-card__description">
          {description}
        </motion.p>
        <motion.div variants={stagger} className="project-card__tags">
          {tags.map((tag, index) => (
            <motion.span variants={scaleY} key={index} className="project-card__tag">
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <motion.a
          variants={scale}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
