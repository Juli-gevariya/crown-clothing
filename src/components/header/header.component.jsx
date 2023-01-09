import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './header.styles.scss';

const HeaderMenu = () => {
    return(
        <div className="header">
            <Link to='/' className="logo-container">
                <Logo className ='logo' />
            </Link>
            <div className="options">
                <Link className="option" to ='/shop'>Shop</Link>
                <Link className="option" to ='/cart'>Cart</Link>
                <Link className="option" to ='/contact'>Contact</Link>
            </div>
        </div>
    )
}
export default HeaderMenu;
