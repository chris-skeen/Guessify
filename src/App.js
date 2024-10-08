import { useState } from "react";
import "./App.css";

const signUpBtn = document.getElementById('sign-up');

function App() {
  const [pageState, setPageState] = useState("default");
  if (pageState === "default") {
    return (
      <div className="App">
          <div className="main-title">Word Whiz</div>
          <div className="signup-cont">
            <button id="sign-up" className="both-btn">Sign Up!</button>
            <button id="log-in" className="both-btn">Log In!</button>
          </div>
      </div>
    );
  } else {
    return <h1>HELLO</h1>;
  }
}

export default App;
