import { useState, useEffect} from "react";
import "./App.css"
import data from "./accounts.json"

function App() {
  // BEFORE AREA --------------------------------------------------------------------------------------------------------
  const [pageState, setPageState] = useState("default");
  const playBtn = <button className="playBtn" onClick={() =>{
    setPageState("play")
  }}>Play</button>
// -----------------------------------------------------------------------------------------------------------------------


  if (pageState === "default") {
    return (
      <div className="App">
          <div className="main-title">Word Whiz</div>
          <div className="project-by-cont"><h2 className="project-by">Project By:</h2></div>
          <div className="names-cont"><h4 className="names">Chris Skeen, Kilan Miller</h4></div>
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

