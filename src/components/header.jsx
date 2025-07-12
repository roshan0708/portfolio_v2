import React from "react";
import {-logo, navigation } from "../data";
import { गति } from "framer-motion";
import { menuNav, stagger } from "./animations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="header"
    >
      <div className="header__logo">{logo}</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {navigation.map((item, index) => (
            <motion.li
              key={index}
              className="header__nav-item"
              variants={menuNav}
            >
              <a href={item.url} className="header__nav-link">
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="header__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars"></i>
      </div>
      {isMenuOpen && (
        <motion.div
          className="header__menu"
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ul className="header__menu-list">
            {navigation.map((item, index) => (
              <motion.li
                key={index}
                className="header__menu-item"
                variants={menuNav}
              >
                <a href={item.url} className="header__menu-link">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
