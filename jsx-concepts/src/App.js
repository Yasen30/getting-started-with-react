import logo from "./logo.svg";
import "./App.css";

function App() {
  const ownStyle = {
    color: "orange",
    border: "1px solid black",
  };
  const number = 2348;
  const introMyself = {
    name: "md yasen rafi",
    age: 18,
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Hello I am Learning React</h1>
          <div>
            <p>Name : {introMyself.name}</p>
            <p>My age : {introMyself.age}</p>
            <p style={{ color: "black", fontSize: "32px" }}>
              number : {number}
            </p>
            <p style={ownStyle}>This is style by variable</p>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container"></div>
      </header>
    </div>
  );
}

export default App;
