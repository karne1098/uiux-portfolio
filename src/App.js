import './App.css';
import { useState } from "react";
import { InitialPage } from './components/InitialPage';
import { AboutPage } from "./components/AboutPage.js";

import { PersonasProjectPage } from "./components/PersonasProjectPage.js"
import { RedesignProjectPage } from "./components/RedesignProjectPage.js"
import { IterativeProjectPage } from "./components/IterativeProjectPage.js"
import { DevelopmentProjectPage } from "./components/DevelopmentProjectPage.js"

// for next week, portfolio optimization
import { WorkPage } from "./components/WorkPage.js";
// import { ArtPage } from "./components/ArtPage.js";  



function App() {

  // Figure out how to make the body a state such that it changes
  const [body, setBody] = useState(<InitialPage />)

  const bodyToPersonas = () => {
    setBody(<PersonasProjectPage />)
  }

  const bodyToRedesign = () => {
    setBody(<RedesignProjectPage />)
  }

  const bodyToIterative = () => {
    setBody(<IterativeProjectPage />)
  }

  const bodyToDevelopment = () => {
    setBody(<DevelopmentProjectPage />)
  }

  const bodyToWork = () => {
    setBody(<WorkPage />)
  }

  const bodyToAbout = () => {
    setBody(<AboutPage />)
  }



  return (
    <div className="App">

      {/* Navigation bar */}
      <div className="NavBar">

        {/* Logo */}
        <div className="NavBarLogo">
          <button onClick={() => setBody(<InitialPage bodyToPersonas={bodyToPersonas} />)}> radicalwaterbear101</button>
        </div>

        {/* Navigation tabs */}
        <div className="NavTabs">
          <div className="NavTab">
            <button onClick={() => setBody(<WorkPage bodyToPersonas={bodyToPersonas} bodyToRedesign={bodyToRedesign} bodyToIterative={bodyToIterative} bodyToDevelopment={bodyToDevelopment} />)}>
              Work
            </button>
          </div>

          {/* <div className="NavTab">
            <button onClick={() => setBody(<ArtPage />)}> Experimental/Art</button>
          </div> */}
          <div >
            <button className="NavTab" onClick={() => setBody(<AboutPage />)}>
              About
            </button>
          </div>

        </div>

      </div>

      {/* Body */}
      <div className="Body">
        {body}
      </div>

      {/* Footer */}
      <div className="Footer">
        Made with care and intention (and matcha) {"<3"}
      </div>

    </div>
  );
}

export default App;
