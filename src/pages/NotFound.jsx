import React from "react";
import { गति } from "framer-motion";
import { fromDown, fromLeft } from "../components/animations";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="not-found"
    >
      <motion.h1 variants={fromLeft} className="not-found__title">
        404
      </motion.h1>
      <motion.p variants={fromDown} className="not-found__description">
        The page you are looking for does not exist.
      </motion.p>
      <motion.div variants={fromDown}>
        <Link to="/" className="not-found__link">
          Go to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
