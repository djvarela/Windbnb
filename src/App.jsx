import { useState } from "react";

import { ListItem } from "./assets/components/ListItem";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [guests, setGuests] = useState("");

  let newSearch = '""';
  let newGuest = '';

  const searchingCity = ({ target }) => {
    setSearchCity(target.value.toLowerCase().trim());
  };

  const onGuest = ({target})=>{
 
    setGuests(target.value)
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();



    newSearch =searchCity    
    newGuest = guests

    return {newSearch,newGuest}
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <form onSubmit={onSearchSubmit}>
              <input type="text" onChange={searchingCity} />
              <input type="number" onChange={onGuest} />
              <button type="submit">Search</button>
            </form>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Stays in finlandia</h2>
        <h3>12 days</h3>
        <ul>
          <ListItem city={newSearch} guests={newGuest} />
        </ul>
      </main>
    </>
  );
}

export default App;
