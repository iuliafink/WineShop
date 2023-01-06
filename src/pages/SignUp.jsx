import React, { useState } from 'react';
import axios from 'axios';
// import Modal from '../components/UI/Modal';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('/users', {
      email: email,
      password: password,
      name: name,
      age: age,
      address: address
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    // <Modal>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={event => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={event => setAddress(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Sign up" />
    </form>
    // </Modal>
  );
}

export default SignUp;