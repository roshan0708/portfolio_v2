import React from "react";
import { गति } from "framer-motion";
import { skills } from "../data";
import { fromDown, fromLeft, stagger } from "../components/animations";

const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="skills"
    >
      <motion.div variants={stagger} className="skills__content">
        <motion.h1 variants={fromLeft} className="skills__title">
          Skills
        </motion.h1>
        <motion.div variants={stagger} className="skills__list">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fromDown}
              className="skills__item"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
