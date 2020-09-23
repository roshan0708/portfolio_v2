import React, { useState } from 'react';
import Timeline from './timeline';

const WorkExperience = () => {
    return (
      <div
        style={{ background: "#0b0b0d", color: "white"}}
        className="main-div"
      >
        <section className="div-2 work">
          <h1 className="mb-4">Work Experience</h1>
          <Timeline />
        </section>
      </div>
    );
}

export default WorkExperience;
