import React from 'react'
import "./Cart.css"
import Heading from '../../Components/Heading/Heading'
import { Link } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Paragraph from '../../Components/Paragraph/Paragraph'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLessThan } from '@fortawesome/free-solid-svg-icons'
import CartProductList from '../../Components/CartProductList/CartProductList'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { subtotal_calculator } from '../../Utility/Utility'
import { useState } from 'react'
const Cart = ({cart,user}) => {
const [userId,setUserId] = useState("null")
const [subtotal,setSubtotal] = useState(0)
  useEffect(()=>{
   var subtotal = subtotal_calculator(cart)

   setSubtotal(subtotal)
  },[cart])
useEffect(()=>{
if(user){
  setUserId(user.uid)
}
},[user])
    return (
       
            <div className="cart-container">
     
  <div className="two-btn">
  <div className="flex-center">
  <Link to="/shop/all">
      <Paragraph>
      <FontAwesomeIcon icon={faLessThan}/> Continue Shopping
      </Paragraph>
   </Link>
  </div>
  
    <Link to={`/shipping/${userId}`}>
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
        <CartProductList cart={cart}/>
  </div>

  <div className="total-etc">
      <div className="ssl">
     
      </div>
      <div className="checkout-system">
      <Heading>
      Subtotal
    </Heading>
   

   <Paragraph style={{justifySelf:"end"}}>
      {subtotal}
    </Paragraph>
     <div className="btn" style={{gridColumn:"1/ span 2"}}>
     <Link to={`/shipping/${userId}`} >
    <Button value="CHECK OUT" style={{width:"100%",height:"5rem"}} colorScheme="black"/>
    </Link>
     </div>
    </div>
  </div>

</div>

            


    )
}
var mapState = (state)=>({
  cart:state.cart,
  user:state.user.currentUser
})

export default connect(mapState)(Cart)
