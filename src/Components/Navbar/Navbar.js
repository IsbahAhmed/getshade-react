import React from 'react'
import "./Navbar.css"
import cartIcon from '../../assets/img/shopping-cart.svg';
import logo from "../../assets/img/logo-plane.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav">
           <div className="logo">
               <img src={logo}/>
                   <h3>Get Shade</h3>
                   </div>
<div className="home hover flex-center">
    <Link to="/">
    Home
    </Link>
    </div>
<div className="shop hover flex-center">
    <Link to="/shop/all">
    Shop
    </Link>
</div>
<div className="about hover flex-center">
    <Link to="/about">
    About
    </Link>
</div>
<div className="cart-icon cart-123 flex-center" id="cart-icon">

   <img src={cartIcon} alt=""/>
        <div className='cart-count flex-center'></div>
        </div>
        </div>
    )
}

export default Navbar
