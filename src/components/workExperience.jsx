import React from 'react';
import Timeline from './timeline';
import {Fade} from "react-reveal";

const WorkExperience = () => {
    return (
      <div
        style={{ background: "#0b0b0d", color: "white"}}
        className="main-div"
        id="work"
      >
        <section className="div-2 work">
          <Fade left>
          <h1 className="mb-4 heading">Work Experience</h1>
          </Fade>
          <Timeline />
        </section>
      </div>
    );
}

export default WorkExperience;
