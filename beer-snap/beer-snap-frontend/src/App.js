// @ts-nocheck
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Header name="Jens"/>
      <Main />
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>Beer-snap</h1>
      <h2>The best way to share your favourite drink with your friends</h2>
      <p>Welcome {props.name}</p>
    </div>
  )
}

const Main = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      let response = await fetch('http://localhost:8080/beers');
      response = await response.json();
      setBeers(response);
    }
    
    fetchBeers()
  }, []);

  const beerItems = beers.map((beer) => <li>{beer.name} {beer.taste}</li>)

  return (
    <div>
      {beerItems}
    </div>
  )
}

export default App;
