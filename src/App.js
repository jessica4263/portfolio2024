import styles from './App.module.css';
import IntroPage from './components/IntroPage/IntroPage';
import React from 'react';
import SoftwareSkills from './components/SoftwareSkills/SoftwareSkills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <IntroPage />
      <SoftwareSkills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
