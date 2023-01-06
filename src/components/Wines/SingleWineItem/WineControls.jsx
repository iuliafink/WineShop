import React, { useState } from 'react';

const WineControls = props => {
  const [updatedWineDetails, setUpdatedWineDetails] = useState({
    name: '',
    color: '',
    region: '',
    producer: '',
    price: 0
  });

  const [newWineDetails, setNewWineDetails] = useState({
    name: '',
    color: '',
    region: '',
    producer: '',
    price: 0
  });

  const handleUpdateChange = event => {
    setUpdatedWineDetails({
      ...updatedWineDetails,
      [event.target.name]: event.target.value
    });
  }

  const handleCreateChange = event => {
    setNewWineDetails({
      ...newWineDetails,
      [event.target.name]: event.target.value
    });
  }

  const editWine = (id) => {
    fetch(`http://localhost:3000/wines/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedWineDetails)
    });
  }

  const createWine = () => {
    fetch('http://localhost:3000/wines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWineDetails)
    });
  }

  const deleteWine = (id) => {
    fetch(`http://localhost:3000/wines/${id}`, {
      method: 'DELETE'
    });
  }

  return (
    <div>
      <button onClick={() => editWine(props.id)}>Edit Wine</button>
      <input 
        type="text" 
        name="name" 
        value={updatedWineDetails.name} 
        onChange={handleUpdateChange} 
        placeholder="Updated Wine Name"
      />
      <input 
        type="text" 
        name="color" 
        value={updatedWineDetails.color} 
        onChange={handleUpdateChange} 
        placeholder="Updated Wine Color"
      />
      <input 
        type="text" 
        name="region" 
        value={updatedWineDetails.region} 
        onChange={handleUpdateChange} 
        placeholder="Updated Wine Region"
      />
      <input 
        type="text" 
        name="producer" 
        value={updatedWineDetails.producer} 
        onChange={handleUpdateChange} 
        placeholder="Updated Wine Producer"
      />
      <input 
        type="number" 
        name="price" 
        value={updatedWineDetails.price} 
        onChange={handleUpdateChange} 
        placeholder="Updated Wine Price"
      />
      <button onClick={createWine}>Create Wine</button>
      <input 
        type="text"
        name="name"
        value={newWineDetails.name}
        onChange={handleCreateChange}
        placeholder="New Wine Name"
        />
        </div>
  )
};

export default WineControls;