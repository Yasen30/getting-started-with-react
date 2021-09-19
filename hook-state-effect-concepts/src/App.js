import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div style={{ paddingTop: "200px" }}>
      <h1 style={{ textAlign: "center" }}>User Project React</h1>
      {user.map((data) => (
        <User user={data}></User>
      ))}
    </div>
  );
}
// user
function User(props) {
  return (
    <div className="user">
      <p>Name : {props.user.name}</p>
      <p>Id :{props.user.id}</p>
      <p>Phone Number :{props.user.phone}</p>
      <p>Emai :{props.user.email}</p>
    </div>
  );
}

// counter project
function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const increase = count + 1;
    setCount(increase);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", paddingBottom: "100px" }}>
      <h1 style={{ margin: "100px 0" }}>Counter Project</h1>
      <h1>{count}</h1>
      <button className="btn" onClick={handleIncrease}>
        Increament
      </button>
      <button className="btn" onClick={handleDecrease}>
        Decreasement
      </button>
    </div>
  );
}

export default App;
