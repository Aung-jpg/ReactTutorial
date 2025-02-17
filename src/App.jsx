import { useReducer, useEffect } from 'react';
import './App.css';
import chef from "./images/chef.jpg";

function John({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "cheese",
  "apple",
  "margarita",
  "banana"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>I want to be open</button>
        <h2>Welcome to restaurant! {openStatus ? "Open": "Closed"}</h2>
      </div>
      
      <main>
        <img src={chef} height={200} alt="A photo of a smiling cartoon chef"/>
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{listStyleType: 'none'}}>{dish.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  //const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
    console.log(`the restaurant status is ${status ? "open": "closed"}`)
  }, [status])

   return (
    <div>
      <h1>the restaurant is currently {status ? "Open" : "Closed"}</h1>

      <button onClick={toggle}>
        {status ? "Close": "Open"} restaurant
      </button>

      <John name="John" year={new Date().getFullYear()}/>
      <Main dishes={dishObjects} openStatus={status}  onStatus={toggle}/>
    </div>
    );
}

export default App
