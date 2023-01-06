// import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const { email, password } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };
//       const body = JSON.stringify({ email, password });
//       const res = await axios.post('/api/auth', body, config);
//       console.log(res.data);
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <>
//       <h1 className='large text-primary'>Sign In</h1>
//       <p className='lead'>
//         <i className='fas fa-user'></i> Sign into Your Account
//       </p>
//       <form className='form' onSubmit={(e) => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='email'
//             placeholder='Email Address'
//             name='email'
//             value={email}
//             onChange={(e) => onChange(e)}
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='Password'
//             name='password'
//             value={password}
//             onChange={(e) => onChange(e)}
//             required
//             minLength='6'
//           />
//         </div>
//         <input type='submit' className='btn btn-primary' value='Login' />
//       </form>
//       <p className='my-1'>
//         Don't have an account? <Link to='/register'>Sign Up</Link>
//       </p>
//     </>
//   );
// };

// export default Login;