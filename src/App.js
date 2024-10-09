// e3dcc849-cf03-4cc2-9016-7bfba82e149a

import { useState, useEffect} from "react";
import "./App.css"

const url = 'https://random-word-api.herokuapp.com/word'
fetch(url)
.then(response => response.json())
.then(data => findWordStuff(data[0]))
let condition = true;

function findWordStuff(data) {
  while (condition == true) {
    try {
      console.log(data)
      let newUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${data}`;
      fetch(newUrl)
      .then(response => response.json())
      .then(data => console.log(data[0].meanings[0].definitions[0].definition))
      condition = false;
    } catch(err){
      console.log(err)
    }

  }
}

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
