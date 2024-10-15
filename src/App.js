// e3dcc849-cf03-4cc2-9016-7bfba82e149a

// ninja:  y36iHryjXZjCSFbe8GyYvw==uRsUrRmlkcA12P5y
import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";


const url = "https://random-word-api.herokuapp.com/word";
const startBtn = (
  <button onClick={apiWork} className="start-btn">
    New Words
  </button>
);


let indentify = 1;

function checkAnswer1() {
  
  if(document.getElementById('btn1').id === indentify) {
    console.log('winner winner chicken dinner')
    confetti()
    apiWork()
  } else {
    document.getElementById('definition-area-cont').innerHTML = '<div class="definition-area-wrong">WRONG</div>'
    console.log('wrong')
    apiWork()
  }
}
function checkAnswer2() {
  if(document.getElementById('btn2').id === indentify) {
    console.log('winner winner chicken dinner')
    confetti()
    apiWork()
  } else {
    document.getElementById('definition-area-cont').innerHTML = '<div class="definition-area-wrong">WRONG</div>'
    console.log('wrong')
    apiWork()
  }
}
function checkAnswer3() {
  if(document.getElementById('btn3').id === indentify) {
    console.log('winner winner chicken dinner')
    confetti()
    apiWork()
  } else {
    document.getElementById('definition-area-cont').innerHTML = '<div class="definition-area-wrong">WRONG</div>'
    console.log('wrong')
    apiWork()
  }
}

function apiWork() {
  console.log('Api Work Function Was Called.')

  function trying(data) {
    try {
      // Definition Area
      document.getElementById(
        "definition-area-cont"
      ).innerHTML = `<p class="definition-area">${data[0].meanings[0].definitions[0].definition}</p>`;
      // Random button words
      let randNum = Math.floor(Math.random() * 3);
      console.log(randNum);
      document.getElementById("btn1").innerText = "";
      document.getElementById("btn2").innerText = "";
      document.getElementById("btn3").innerText = "";

      if (randNum == 2) {
        document.getElementById("btn3").innerText = data[0].word
      } else {
        console.log('not 2')
      }

      switch (randNum) {
        case 0:
          document.getElementById("btn1").innerText = data[0].word;
          indentify = 'btn1'
          break;
        case 1:
          document.getElementById("btn2").innerText = data[0].word;
          indentify = 'btn2'
          break;
        case 2:
          document.getElementById("btn3").innerText = data[0].word;
          indentify = 'btn3'
          break;
      }
      console.log(indentify)
      const randomWordsApi =
        "https://random-word-api.herokuapp.com/word?number=2";
      fetch(randomWordsApi)
        .then((response) => response.json())
        .then((data) => setTimeout(randomButtonLogic(data), 1000));

      function randomButtonLogic(dataForRandomWord) {
        console.log(data)
        console.log (data[0].word)
        if ((document.getElementById("btn1").innerText === data[0].word)) {
          document.getElementById("btn2").innerText = dataForRandomWord[0];
          document.getElementById("btn3").innerText = dataForRandomWord[1];
        } else if (document.getElementById("btn2").innerText === data[0].word) {
          document.getElementById("btn1").innerText = dataForRandomWord[1];
          document.getElementById("btn3").innerText = dataForRandomWord[0];
        } else if (document.getElementById("btn3").innerText === data[0].word){
            document.getElementById("btn1").innerText = dataForRandomWord[1]
            document.getElementById("btn2").innerText = dataForRandomWord[0]

        } else {
          console.log('error occured')
        }
      }
    } catch (err) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => findWordStuff(data[0]));
    }
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => findWordStuff(data[0]));

  function findWordStuff(data) {
    let newUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${data}`;
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => trying(data));
  }
}

function App() {
  // BEFORE AREA --------------------------------------------------------------------------------------------------------
  const [pageState, setPageState] = useState("default");
  const playBtn = (
    <button
      className="playBtn"
      onClick={() => {
        setPageState("play");
      }}
    >
      Play
    </button>
  );
  // -----------------------------------------------------------------------------------------------------------------------

  if (pageState === "default") {
    return (
      <div className="App">
        <div className="main-title">Word Whiz</div>
        <div className="project-by-cont">
          <h2 className="project-by">Project By:</h2>
        </div>
        <div className="names-cont">
          <h4 className="names">Chris Skeen</h4>
        </div>
        <div className="play-btn-cont">{playBtn}</div>
      </div>
    );
  } else if (pageState === "play") {
    return (
      <div className="App">
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
        <div className="main-title-play">Word Whiz</div>
        <div className="start-btn-cont">{startBtn}</div>
        <div id="definition-area-cont" className="definition-area-cont">
          <p className="definition-area">
            This is where the definition will go!
          </p>
        </div>
        <div className="test-cont">
          <button
            onClick={checkAnswer1}
            id="btn1"
            className="test-btns"
          ></button>
          <button
            onClick={checkAnswer2}
            id="btn2"
            className="test-btns"
          ></button>
          <button
            onClick={checkAnswer3}
            id="btn3"
            className="test-btns"
          ></button>
        </div>
      </div>
    );
  }
}

export default App;
