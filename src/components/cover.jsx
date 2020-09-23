import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";

const Cover = () => {
    return (
      <div className="bg-div">
        <div className="head mx-5">
          <div className="head-div mx-auto main-div">
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Hi, my name is</h1>
              <h1 className="head-div-second-text">Roshan Kanwar.</h1>
              <h1 className="head-div-third-text">
                I turn ideas into reality.
              </h1>
              <p className="head-div-fourth-text">
                I'm a software developer and competitive coder based in India,
                with keen interest and skills in building beautiful and eye
                catching websites.
              </p>
            </section>
          </div>
        </div>
        <span className="scroll-btn">
          <a href="#">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
        <div aria-orientation="left" className="social-media">
          <ul className="social-media-list">
            <li>
              <a
                className="social-media-list-link"
                href="https://github.com/roshan0708"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="media-icons" />
              </a>
            </li>
            <li>
              <a
                className="social-media-list-link"
                href="https://www.linkedin.com/in/roshan0708/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="media-icons" />
              </a>
            </li>
            <li>
              <a
                className="social-media-list-link"
                href="https://www.hackerrank.com/roshan_0708"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faHackerrank} className="media-icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Cover
