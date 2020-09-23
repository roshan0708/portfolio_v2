import React from 'react';
import Cover from './components/cover';
import NavbarComponent from "./components/navbar";
import About from './components/about';
import WorkExperience from './components/workExperience';

const App = () => {
  return (
    <div className="app">
      <NavbarComponent />
      <Cover />
      <About />
      <WorkExperience />
    </div>
  );
}

export default App;