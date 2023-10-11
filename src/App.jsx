import { useState } from "react";
import { useForm } from "react-hook-form";
import { ListItem } from "./assets/components/ListItem";
import { isActive } from "./utils";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [guests, setGuests] = useState("");
  const { register, handleSubmit } = useForm();

  const onSearchSubmit = handleSubmit((e) => {
    setSearchCity(e.city);
    setGuests(e.number);

    const local = JSON.parse(localStorage.getItem("city"))  || []; //tomar
 
    local.push(e.city);
   
    localStorage.setItem("city", JSON.stringify(local)); // enviar
    console.log(local)
  });

  return (
    <>
      <header>
        <nav>
          <ul>
            <form
              onSubmit={onSearchSubmit}
              className="forms-modal"
              autoComplete="off"
            >
              <input type="text" {...register("city")} onClick={isActive} />
              <input
                type="number"
                {...register("number")}
                onClick={isActive}
                placeholder="Add guests"
              />
              <button type="submit">🔍</button>
            </form>
          </ul>
        </nav>
        <div className="modal-search">
          <div className="location">
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>

          <div className="guest-modal">
            <ul>
              <li>Test</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <h2>Stays in finlandia</h2>
        <h3>12 days</h3>
        <ul>
          <ListItem city={searchCity} guests={guests} />
        </ul>
      </main>
    </>
  );
}

export default App;
