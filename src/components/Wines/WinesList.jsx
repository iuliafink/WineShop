import { useEffect, useState } from 'react';
// import Card from '../UI/Card';
import SingleWineItem from './SingleWineItem/SingleWineItem';

function WinesList() {
  const winesUrl = 'http://localhost:3001/wines';
    const [wines, setWines] = useState([]);
  
    useEffect(() => {
      function fetchWines() {
        fetch(winesUrl)
          .then(response => response.json())
          .then(data => setWines(data));
      }
      fetchWines();
    }, []);
  
    return (
      <section>
        {/* <Card> */}
          <ul>
            {wines.map(wine => (
              <SingleWineItem
                key={wine.id}
                id={wine.id}
                name={wine.name}
                color={wine.color}
                producer={wine.producer}
                region={wine.region}
                price={wine.price}
                img={wine.img}
              />
            ))}
          </ul>
        {/* </Card> */}
      </section>
    );
  }
  
  export default WinesList;
  
  // unsplash acces token app: aBZKSbFl7kj9A6vvgtPGT5yp4iyt8aMQabDbnisnpTk
