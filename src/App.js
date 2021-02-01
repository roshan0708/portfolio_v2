import React from 'react';
import Cover from './components/cover';
import NavbarComponent from "./components/navbar";
import About from './components/about';
import WorkExperience from './components/workExperience';
import Quote from './components/quote';
import Projects from './components/projects';
import Contact from './components/contact';
import Loading, { loadingListener } from "./components/loader";

const App = () => {
  React.useEffect(() => {
    loadingListener()
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

export default App;