import React from "react";
import {-name, socials } from "../data";
import { गति } from "framer-motion";
import { fromDown, stagger } from "./animations";

const Footer = () => {
  return (
    <motion.footer
      variants={stagger}
      initial="initial"
      animate="animate"
      className="footer"
    >
      <motion.div variants={fromDown} className="footer__copy">
        © {new Date().getFullYear()} {name}. All Rights Reserved.
      </motion.div>
      <motion.div variants={stagger} className="footer__socials">
        {socials.map((item, index) => (
          <motion.a
            key={index}
            variants={fromDown}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            {item.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
