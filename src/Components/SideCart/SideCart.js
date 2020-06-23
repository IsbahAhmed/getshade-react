import React, { useEffect } from 'react'
import arrow from "../../assets/img/right-arrow.svg"
import Button from '../Button/Button'
import "./SideCart.css"
import { useState } from 'react'
import SideCartListItem from '../SideCart_ListItem/SideCartListItem'
import SideCartItemList from '../Sidecart_ItemList/SideCartList'

const SideCart = (props) => {
   var {cartToglleHandler,cartToggleValue,initialRender} = props
 var [wrapperDisplay,setWrapperDisplay] = useState("none")
    useEffect(() => {
        // effect
      if(cartToggleValue){
          setTimeout(() => {
              setWrapperDisplay("block")
          }, 100);
      }
      else{
        setTimeout(() => {
            setWrapperDisplay("none")
        }, 300);
      }
    }, [cartToggleValue])
    return (
       <React.Fragment>
<div className={cartToggleValue ? "black-wrapper wrapper-on":"black-wrapper wrapper-off"} style={{display:`${wrapperDisplay}`}} onClick={()=>cartToglleHandler(false)}></div>

     {
        initialRender ? (
            <div className={cartToggleValue ? (" cart-view cart-on-ani"):("cart-view cart-off-ani") } id="cart-view">
            <div className="cart-off" >
                <div className="arrow-btn flex-center cart-off-btn" onClick={()=> cartToglleHandler(false)} >
                    <img src={arrow}  alt="" />
                </div>
                <h2 style={{alignSelf: "center", marginLeft: "30%"}} >CART</h2>
            </div>
            <div className="item-list">
                 <SideCartItemList/>
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
         )
         :
         null
     }
       </React.Fragment>
    )
}

export default SideCart
