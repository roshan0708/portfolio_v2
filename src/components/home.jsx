import React from 'react';
import Cover from './cover';
import NavbarComponent from "./navbar";
import About from './about';
import WorkExperience from './workExperience';
import Quote from './quote';
import Projects from './projects';
import Contact from './contact';
import Loading, { loadingListener } from "./loader";

const Home = () => {
  React.useEffect(() => {

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    loadingListener();
  }, [])
  return (
    <div className="app">
      <Loading/>
      <NavbarComponent />
      <Cover />
      <About />
      <WorkExperience />
      <Quote />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
