import React from "react";
import { गति } from "framer-motion";
import { email } from "../data";
import { fromDown, fromLeft, fromRight, stagger } from "../components/animations";

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="contact"
    >
      <motion.div variants={stagger} className="contact__content">
        <motion.h1 variants={fromLeft} className="contact__title">
          Contact Me
        </motion.h1>
        <motion.p variants={fromRight} className="contact__description">
          I am always open to new opportunities and collaborations. If you have
          any questions, please don't hesitate to contact me.
        </motion.p>
        <motion.a
          variants={fromDown}
          href={`mailto:${email}`}
          className="contact__email"
        >
          {email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
