import React from 'react'
import "./Navbar.css"
import cartIcon from '../../assets/img/shopping-cart.svg';
import logo from "../../assets/img/logo-plane.png"
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';
import { getSiblings } from '../../Utility/Utility';

const Navbar = (props) => {
    // var [slectedLink,linkSelector] = useState("home")

    var {cartToglleHandler} = props;

    return (
        <div className="nav">
           <div className="logo">
               <img src={logo}/>
                   <h3>Get Shade</h3>
                   </div>
<div className="home hover flex-center " >
    <Link to="/">
    HOME
    </Link>
    </div>
<div className="shop hover flex-center" >
    <Link to="/shop/all">
    SHOP
    </Link>
</div>
<div className="about hover flex-center" >
    <Link to="/about">
    ABOUT
    </Link>
</div>
<div className="contact hover flex-center" >
    <Link to="/about">
  CONTACT
    </Link>
</div>
<div className="auth hover flex-center" >
    <Link to="/auth">
  ACCOUNT
    </Link>
</div>
<div className="cart-icon cart-123 flex-center" id="cart-icon">

   <img src={cartIcon} onClick={()=> cartToglleHandler(true)} alt=""/>
        <div className='cart-count flex-center' ></div>
        </div>
        </div>
    )
}

export default withRouter(Navbar)
