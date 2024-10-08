import { useState, useRef, useEffect} from "react";
import "./App.css"
import axios from "axios";




function App() {
  // BEFORE AREA --------------------------------------------------------------------------------------------------------
  const signUpBtn =  <button onClick={()=> {setPageState('sign-up')}} id="sign-up" className="both-btn">Sign Up!</button>
  const [pageState, setPageState] = useState("default");
// -----------------------------------------------------------------------------------------------------------------------
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    axios.get(`accounts.json`).then((response) => {
      setItems(response.data);
    });
  }, []);

  const addItem = () => {
    axios.post(`accounts.json`, { username: newItemName }).then((response) => {
      console.log(response.data)
      setItems(response.data);
      setNewItemName("goat");
    });
  };

  const handleNewItemChange = (event) => {
    setNewItemName(event.target.value);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.username}>
          <h3>{item.password}</h3>
        </div>
      ))}
      <div>
        <input type="text" value={newItemName} onChange={handleNewItemChange} />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}



//   if (pageState === "default") {
//     return (
//       <div className="App">
//           <div className="main-title">Word Whiz</div>
//           <div className="signup-cont">
//             {signUpBtn}
//             {/* <button id="log-in" className="both-btn">Log In!</button> */}
//           </div>
//       </div>
//     );

//   } else if (pageState === 'sign-up'){
//     return (
//     <div className="App">
//       <div className="main-title-signup">Word Whiz</div>
//     </div>
//   );

//   }
// }

export default App;
