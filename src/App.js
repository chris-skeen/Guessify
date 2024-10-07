import { useState } from "react";
import "./App.css";

const url = process.env.PUBLIC_URL + "images/word-whiz-logo.png"

function App() {
  const [pageState, setPageState] = useState("default");
  if (pageState === "default") {
    return (
      <div className="App">
        <div className="logo-cont">
          <img className="word-whiz-logo" src={url} alt="Word Whiz Logo!"/>
        </div>
        <div className="summary-cont-main">
          <h1 className="summary-header">About</h1>
          <span className="summary-cont"></span>
        </div>
      </div>
    );
  } else {
    return <h1>HELLO</h1>;
  }
}

export default App;
