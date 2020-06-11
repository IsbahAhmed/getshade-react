import React from 'react'
import arrow from "../../assets/img/right-arrow.svg"
import Button from '../Button/Button'
import "./SideCart.css"
import { useState } from 'react'

const SideCart = (props) => {
   var {cartToglleHandler,cartToggleValue} = props
  const [blackWrapper, setwrapper] = useState(false)
 
    return (
       <React.Fragment>
 {
        cartToggleValue ? (
            <div className="black-wrapper wrapper-on" style={{display:"block"}} onClick={()=>cartToglleHandler(false)}></div>
        )
        :
        (
            <div className=" wrapper-off black-wrapper"></div>

        )
 }
        <div className={cartToggleValue ? (" cart-view cart-on-ani"):("cart-view cart-off-ani") } id="cart-view">
        <div className="cart-off" >
            <div className="arrow-btn flex-center cart-off-btn" onClick={()=> cartToglleHandler(false)} >
                <img src={arrow}  alt="" />
            </div>
            <h2 style={{alignSelf: "center", marginLeft: "30%"}} >CART</h2>
        </div>
        <div className="item-list">
              
        </div>
        <div className="amount-total">
         
            <h2>SUBTOTAL</h2>
            <h2>Rs 
            <span style={{color: "black"}} className="amount-calc">2000</span></h2>
            <div className="view-cart-btn">
                <Button value="View Cart" /> 
            </div>
        </div>
    </div>
       </React.Fragment>
    )
}

export default SideCart
