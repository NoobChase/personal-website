import Header from './components/header'
import PersonalInfo from './components/personalInfo'
import Education from './components/education'
import Projects from './components/projects'
import React, {useState,useEffect,  useRef} from 'react'

function App() {

  return (
    <div>
      <body>
        <Header/>

        <PersonalInfo/>

        <Education/>

        <Projects/>

      </body>
    </div>
  );
}

export default App;
