import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Mobile></Mobile>
    </div>
  );
}

function Mobile() {
  const [count, setCount] = useState(100);
  const handleIncrease = () => {
    setCount(count - 10);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ padding: " 100px 0" }}>Battery Down Project</h1>
      <h1>{count}</h1>
      {count > 0 ? (
        <button onClick={handleIncrease} className="btn">
          Battery Down
        </button>
      ) : (
        <button disabled className="btn">
          Battery Down
        </button>
      )}
    </div>
  );
}
export default App;
