import "./styles.css";
import Home from "./Home";
import img from "./React-logo.png";

let count = 0;
function Button() {
  console.log("you've clicked the button", count++, "times");
}
export default function App() {
  console.log("Hello from main page, I'm the parent of this page");

  return (
    <div className="App">
      <div className="header">
        <h1>This is Rusul tag from main page</h1>
        <img src={img} className="imglogo" alt="img"></img>
      </div>
      <Home />
      <div>
        <button onClick={Button}>Click on</button>
      </div>
    </div>
  );
}
