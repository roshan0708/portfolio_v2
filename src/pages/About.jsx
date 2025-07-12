import React from "react";
import { गति } from "framer-motion";
import {-name, about } from "../data";
import { fromLeft, fromRight, stagger } from "../components/animations";

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="about"
    >
      <motion.div variants={stagger} className="about__content">
        <motion.h1 variants={fromLeft} className="about__title">
          About Me
        </motion.h1>
        <motion.p variants={fromRight} className="about__description">
          {about.description}
        </motion.p>
      </motion.div>
      <motion.div variants={fromRight} className="about__image">
        <img src={about.image} alt={name} />
      </motion.div>
    </motion.div>
  );
};

export default About;
