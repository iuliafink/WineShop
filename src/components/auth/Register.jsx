// import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import { v4 as uuid } from 'uuid';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     password2: '',
//   });

//   const { username, email, password, password2 } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== password2) {
//       console.log('Passwords do not match');
//     } else {
//       const newUser = {
//         id: uuid.v4(),
//         username,
//         email,
//         password,
//       };
//       try {
//         const config = {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         };
//         const body = JSON.stringify(newUser);
//         const res = await axios.post('/api/users', body, config);
//         console.log(res.data);

//         // Add new user object to "users" collection in database
//         db.users.push(newUser);
//       } catch (err) {
//         console.error(err.response.data);
//       }
//     // 
//   };

//   return (
//     <>
//       <h1 className='large text-primary'>Sign Up</h1>
//       <p className='lead'>
//         <i className='fas fa-user'></i> Create Your Account
//       </p>
//       <form className='form' onSubmit={(e) => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Username'
//             name='username'
//             value={username}
//             onChange={(e) => onChange(e)}
//               required
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='email'
//               placeholder='Email Address'
//               name='email'
//               value={email}
//               onChange={(e) => onChange(e)}
//               required
//             />
//             <small className='form-text'>
//               This site uses Gravatar so if you want a profile image, use a
//               Gravatar email
//             </small>
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               placeholder='Password'
//               name='password'
//               value={password}
//               onChange={(e) => onChange(e)}
//               required
//               minLength='6'
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               placeholder='Confirm Password'
//               name='password2'
//               value={password2}
//               onChange={(e) => onChange(e)}
//               required
//               minLength='6'
//             />
//           </div>
//           <input type='submit' className='btn btn-primary' value='Register' />
//         </form>
//         <p className='my-1'>
//           Already have an account? <Link to='/login'>Sign In</Link>
//         </p>
//       </>
//     );
//   };
  
//   export default Register;