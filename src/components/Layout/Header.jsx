import { Fragment } from "react";
import classes from './Header.module.css';
import headerImage from '../../assets/WineNot2.png';
import CartButton from "./CartButton";
// import SignUp from "../../pages/SignUp";
// import {useNavigate} from "react-router-dom";
// import SignUp from "../../pages/SignUp";
import Login from "../auth/Login"


const Header = props => {
    // const navigate = useNavigate();

    // function navigateLogin () {
    //     navigate('./signin')
    //  }


    return <Fragment>
        <header className={classes.header}>
            <h1>¿Wine Not?</h1>
            <button className = {classes.login}
            //  onClick={<Login/>}
            //  onClick ={navigateLogin}
             >Login/Register</button>
            <CartButton onClick = {props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt='Glass of wine. Wine Shop banner.'/>
        </div>
    </Fragment>
};

export default Header;