import { useContext, useState } from 'react';
import CartContext from '../../../store/CartContext';
import Card from '../../UI/Card';
import OrderForm from './OrderForm';
import WineControls from './WineControls';
import classes from './SingleWineItem.module.css';

const SingleWineItem = props => {
  const cartContext = useContext(CartContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedWineDetails, setUpdatedWineDetails] = useState({
    name: '',
    color: '',
    region: '',
    producer: '',
    price: 0
  });

  const price = `€${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  const editWine = (id, updatedWineDetails) => {
    fetch(`http://localhost:3000/wines/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: updatedWineDetails.name,
        color: updatedWineDetails.color,
        region: updatedWineDetails.region,
        producer: updatedWineDetails.producer,
        price: updatedWineDetails.price
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  const createWine = (newWineDetails) => {
    fetch('http://localhost:3000/wines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newWineDetails.name,
        color: newWineDetails.color,
        region: newWineDetails.region,
        producer: newWineDetails.producer,
        price: newWineDetails.price
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Do something with the data here, such as update the UI or show a success message
    })
    .catch(error => {
      console.error(error);
      // Do something with the error here, such as show an error message
    });
  };  

  const deleteWine = (id) => {
    fetch(`http://localhost:3000/wines/${id}`, {
      method: 'DELETE'
    });
  }
  return (
    <Card>
      <li className={classes.wine}> 
        <div>
          {!isEditing ? (
            <>
              <h2 className={classes.h2}>{props.name}</h2>
              <div className={classes.color}>Color: {props.color}</div>
              <div>Producer: {props.producer}</div>
              <div>Region: {props.region}</div>
              <div className={classes.prices}>{price}</div>
              <OrderForm 
                onAddToCart={addToCartHandler}
                id={props.id}
              />
            </>
          ) : (
            <WineControls
              id={props.id}
              updatedWineDetails={updatedWineDetails}
              setUpdatedWineDetails={setUpdatedWineDetails}
            />
          )}
          <div>
            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Cancel' : 'Edit Wine'}</button>
            <button onClick={() => createWine()}>Create Wine</button>
            <button onClick={() => deleteWine(props.id)}>Delete Wine</button>
          </div>
        </div>
      </li>
      <img src={props.img} className={classes.img} alt='The wine we are selling'></img>
    </Card>
  );
 }  

export default SingleWineItem;


