import React from 'react';
import Cover from './components/cover';
import NavbarComponent from "./components/navbar";

const App = () => {
  return (
    <div className="app">
      <NavbarComponent />
      <Cover />
    </div>
  );
}

export default App;