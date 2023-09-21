
import { useState } from 'react'

import { ListItem } from './assets/components/ListItem'

function App() {
const [searchCity, setSearchCity] = useState('');
const [guests, setGuests] = useState(1);


const searchingCity = ({target})=>{
  let value = target.value.toLowerCase()
  setSearchCity(value)
}
const searchingGuest = ({target})=>{

  setGuests(target.value)
  setGuests('')
console.log(target.value);
}

  return (
    <>
     <header>
      <nav>
        <ul>
          {/* <li><h2>Logo</h2></li>
          <li>city</li>*/}
          <li>
            <input 
              type="number" 
              onChange={searchingGuest}
            />
            
            </li> 
          <li>
            <input type="text"
            onChange={searchingCity}
     
          />
           </li>
        </ul>
      </nav>
     </header>

     <main>
     <h2>Stays in finlandia</h2>
        <h3>12 days</h3>
<ul>

  

    <ListItem city={searchCity} guest={guests} />
 
    </ul>

     </main>

    </>
  )
}

export default App
