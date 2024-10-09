// e3dcc849-cf03-4cc2-9016-7bfba82e149a

import { useState, useEffect} from "react";
import "./App.css"
import data from "./accounts.json"

function App() {
  // BEFORE AREA --------------------------------------------------------------------------------------------------------
  const [pageState, setPageState] = useState("default");
  const playBtn = <button className="playBtn" onClick={() =>{
    setPageState("play")
  }}>Play</button>
  const url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=e3dcc849-cf03-4cc2-9016-7bfba82e149a'
  fetch(url)
  .then(response => response.json)
  .then(data => console.log(data))


// -----------------------------------------------------------------------------------------------------------------------


  if (pageState === "default") {
    return (
      <div className="App">
          <div className="main-title">Word Whiz</div>
          <div className="project-by-cont"><h2 className="project-by">Project By:</h2></div>
          <div className="names-cont"><h4 className="names">Chris Skeen, </h4></div>
          <div className="play-btn-cont">{playBtn}</div>
      </div>
  
    );




  } else if (pageState === 'play'){
    return (
    <div className="App">
      <div className="main-title-play">Word Whiz</div>

    </div>
  );

  }
}

export default App;
