import './App.css';
import { useState } from "react";
import { InitialPage } from './components/InitialPage';
import { AboutPage } from "./components/AboutPage.js";

import { Card } from "./components/Card.js"
import { PersonasProjectPage } from "./components/PersonasProjectPage.js"
import { RedesignProjectPage } from "./components/RedesignProjectPage.js"
import { IterativeProjectPage } from "./components/IterativeProjectPage.js"
import { DevelopmentProjectPage } from "./components/DevelopmentProjectPage.js"

// for next week, portfolio optimization
// import { WorkPage } from "./components/WorkPage.js";
// import { ArtPage } from "./components/ArtPage.js";  



function App() {

  // Figure out how to make the body a state such that it changes
  const [body, setBody] = useState(<InitialPage />)


  return (
    <div className="App">

      {/* Navigation bar */}
      <div className="NavBar">

        {/* Logo */}
        <div className="NavBarLogo">
          <button onClick={() => setBody(<InitialPage />)}> Name Here</button>
        </div>

        {/* Navigation tabs */}
        <div className="NavTabs">
          <div>
            <button className="NavTab" onClick={() => setBody(<PersonasProjectPage />)}> Personas</button>
          </div>

          <div>
            <button className="NavTab" onClick={() => setBody(<RedesignProjectPage />)}> Responsive Redesign</button>
          </div>

          <div>
            <button className="NavTab" onClick={() => setBody(<IterativeProjectPage />)}> Iterative Design</button>
          </div>

          <div>
            <button className="NavTab" onClick={() => setBody(<DevelopmentProjectPage />)}> Web Development</button>
          </div>




          {/* <div className="NavTab">
            <button onClick={() => setBody(<WorkPage />)}> Work</button>
          </div> */}
          {/* <div className="NavTab">
            <button onClick={() => setBody(<ArtPage />)}> Experimental/Art</button>
          </div> */}
          <div >
            <button className="NavTab" onClick={() => setBody(<AboutPage />)}> About</button>
          </div>





        </div>

      </div>

      {/* Body */}
      <div className="Body">
        {body}
      </div>


    </div>
  );
}

export default App;
