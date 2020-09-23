import React from 'react';
import Cover from './components/cover';
import NavbarComponent from "./components/navbar";
import About from './components/about';

const App = () => {
  return (
    <div className="app">
      <NavbarComponent />
      <Cover />
      <About />
    </div>
  );
}

export default App;