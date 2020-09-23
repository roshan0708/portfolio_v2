import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";

const Cover = () => {
    return (
      <div className="bg-div">
        <div className="head mx-5">
          <main className="head-div mx-auto">
            <section className="content-section">
              <h1 className="my-1 head-div-first-text">Hi, my name is</h1>
              <h1 className="head-div-second-text">Roshan Kanwar.</h1>
              <h1 className="head-div-third-text">
                I build things for the web.
              </h1>
              <p className="head-div-fourth-text">
                I'm a full-stack developer and competitive coder based in India,
                with keen interest and skills in building beautiful and eye
                catching websites.
              </p>
            </section>
          </main>
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
              <a className="social-media-list-link">
                <FontAwesomeIcon icon={faGithub} className="media-icons" />
              </a>
            </li>
            <li>
              <a className="social-media-list-link">
                <FontAwesomeIcon icon={faLinkedin} className="media-icons" />
              </a>
            </li>
            <li>
              <a className="social-media-list-link">
                <FontAwesomeIcon icon={faHackerrank} className="media-icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Cover
