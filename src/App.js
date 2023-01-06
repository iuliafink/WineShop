import { useState } from 'react';
import React from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Wines from './components/Wines/Wines';
import CartProvider from './store/CartProvider';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return ( <>
    <CartProvider>
      {cartIsShown && <Cart onClose = {hideCartHandler}/>} 
     <Header onShowCart = {showCartHandler}/>
     <main>
      <Wines />
     </main>
    </CartProvider>
    
     {/* <BrowserRouter>
      <Routes>
        <Link to="/signup">Sign in</Link>
         <Route path="/signin" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>  */}


    {/* <Router>
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
  </Router> */}
    </>
  );
}

export default App;
