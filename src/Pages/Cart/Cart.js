import React from 'react'
import "./Cart.css"
import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Paragraph from '../../Components/Paragraph/Paragraph'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLessThan } from '@fortawesome/free-solid-svg-icons'
import CartProductList from '../../Components/CartProductList/CartProductList'
const Cart = (props) => {
    return (
       
            <div className="cart-container">
     
  <div className="two-btn">
  <div className="flex-center">
  <Link to="/shop">
      <Paragraph>
      <FontAwesomeIcon icon={faLessThan}/> Continue Shopping
      </Paragraph>
   </Link>
  </div>
    {/* <h3 class="check-out">Checkout</h3>  */}
    <Link to="/shipping/x12">
    <Button value="CHECK OUT" style={{padding:"1rem 3rem"}} colorScheme="black"/>
    </Link>
   
  </div>
  {/* item-section */}
  <div className="items-list">
    <div className="headings">
      <Heading>My Cart</Heading>
     <Heading>Price</Heading>
      <Heading>Quantity</Heading>
      <Heading>Total Amount</Heading>
    </div>
        <CartProductList/>
  </div>

  <div className="total-etc">
    <div className="col-1">
    
 
    </div>
    <div className="col-3">
    <Heading>
        Subtotal
    </Heading>
  
    </div>
    <div className="col-4">
    <Paragraph>
        2000
    </Paragraph>
    </div>
    <div className="ssl" />
    <div className="checkout-btn">
    
     <div className="btn">
     <Link to="/shipping/x12" >
    <Button value="CHECK OUT" style={{width:"35rem",height:"5rem"}} colorScheme="black"/>
    </Link>
     </div>
      {/* dont Select it by id in css */}
    </div>
  </div>

</div>

            


    )
}

export default Cart
