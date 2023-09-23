import {data} from '../../data'
export const ListItem = ( {city = '', guests = ''} ) => {

  return (
    <>

      {
        
      data
      .filter((info) => info.city.includes(city) && (!info.maxguests || info.maxguests >= guests) )
      .map((info) => (
          
          <li key={info.title}>

            <div className="imgContainer">
              <img src={info.photo} alt={info.title} />
            </div>

            <div className="info">
              <span>
                {info.superHost ? (
                  <p className="superHost">Super Host</p>
                ) : null}
                <p>{info.type}</p>
                <p>⭐{info.rating}</p>
                
              </span>
              <h2>{info.title}</h2>
              <small>{info.city}</small>
            </div>
          </li>
        ))}
      
    </>
  );
};


//&& (!info.maxguests || info.maxguests >= guest)