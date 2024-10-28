import styles from './App.module.css';
import IntroPage from './components/IntroPage/IntroPage';
import React, {useState} from 'react';
import SoftwareSkills from './components/SoftwareSkills/SoftwareSkills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import textEN from "./EN.json"
import textDE from "./DE.json"

function App() {
  const [languageEn, setLanguageEn] = useState(true);
  const sourceText = languageEn ? textEN : textDE;

  return (
    <>
      <IntroPage languageEn={languageEn} setLanguageEn={setLanguageEn} sourceText={sourceText}/>
      <SoftwareSkills sourceText={sourceText}/>
      <Projects sourceText={sourceText}/>
      <Experience sourceText={sourceText}/>
      <Contact sourceText={sourceText}/>
    </>
  );
}

export default App;
