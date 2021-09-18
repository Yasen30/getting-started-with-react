import "./App.css";

function App() {
  const names = ["boltu", "joltu", "toltu", "ferdous", "tilto", "kilto"];
  const cinemas = [
    {
      name: "ami jani na",
      hero: "hassan",
      heroine: "hasina",
      director: "rafi",
    },
    { name: "ami jani", hero: "sakib", heroine: "opu", director: "rafi" },
    {
      name: "tumi ki jano",
      hero: "ferdous",
      heroine: "mosoumi",
      director: "rafi",
    },
  ];

  return (
    <div>
      {/* <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul> */}
      {cinemas.map((cinema) => (
        <Cinema data={cinema}></Cinema>
      ))}
      <IntroPerson
        name="sakib al hassn"
        profession="crickter"
        age="35"
        phone="0187548522"
      ></IntroPerson>
    </div>
  );
}

function Cinema(props) {
  return (
    <div>
      <h1>Name : {props.data.name}</h1>
      <h4>Director : {props.data.director}</h4>
      <p>Hero :{props.data.hero}</p>
      <p>Heroine :{props.data.heroine}</p>
    </div>
  );
}

function IntroPerson(props) {
  const textStyle = {
    color: "orange",
  };
  return (
    <div className="person">
      <h1 style={textStyle}>Name : {props.name}</h1>
      <p style={{ color: "black" }}>Profession : {props.profession}</p>
      <p>age : {props.age}</p>
      <p>phone : {props.phone}</p>
    </div>
  );
}

export default App;

// <IntroPerson
// name="sakib al hassn"
// profession="crickter"
// age="35"
// phone="0187548522"
// ></IntroPerson>
