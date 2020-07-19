import React from 'react'
import "./Navbar.css"
import cartIcon from '../../assets/img/shopping-cart.svg';
import logo from "../../assets/img/logo-plane.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';

import MobileNav from '../MobileNav/MobileNav';
import {connect} from "react-redux"
import { fetchProducts } from '../../Redux/productsReducer/productActions';

const Navbar = (props) => {
    // var [slectedLink,linkSelector] = useState("home")
    var {cartToglleHandler,cart} = props;
  var [navbar,setNavbar] = useState("mobile");
  var [cartCount,setCountValue] = useState(0);
    
    React.useEffect(()=>{
        if(cart.length){
            setCountValue(cart.length)
        }
        else{
            setCountValue(0)
        }
    },[cart])

  React.useEffect(() => {
        function handleResize() {
        // console.log()
        if(window.innerWidth <= 768){
            setNavbar("mobile")
        }
        else{
            setNavbar("normal")
        }
  }
  window.addEventListener("load",handleResize)

  window.addEventListener("resize",handleResize)
  props.fetchProducts()
  return ()=>{
    window.removeEventListener("load",handleResize)
    window.removeEventListener("resize",handleResize)

  }
        },[])
 

    return (
        <div>
            {
                navbar === "mobile"?
                <MobileNav/>
                :
                (     <div className="nav">
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
         <Link to="/contact">
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
            <div className={`cart-count flex-center ${(cartCount > 0) && "pop-count"}`} >
            {cartCount}
            </div>
             </div>
             </div>)
             
            
            }
        </div>
    )
}
var mapState = (state)=>({
    cart:state.cart
})
var actions = {
    fetchProducts
}
export default connect(mapState,actions)(Navbar)
