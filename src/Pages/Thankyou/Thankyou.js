import React from 'react'
import "./Thankyou.css"
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { clearCart } from '../../Redux/cartReducer/cartActions'

const Thankyou = ({match:{params:{orderId}},user,clearCart}) => {
    const [eligiblity,setEligibility] = useState(true);
    useEffect(()=>{
if(user && user.orders){
var check = user.orders.some((order)=> order === orderId);
setEligibility(check);
if(check){
clearCart()
}
}
else{
    setEligibility(false)
}
    },[user])
    return (
        <div className="thanku-container">
      {
          eligiblity ?     <div className="thank-main" >
          <Heading fontSize="40" style={{letterSpacing:"2px"}}>
           CONGRATZ
          </Heading>
        <Paragraph fontSize="20">
            Your order has been placed <br/>
        Thank you for your purchase from Get Shade. <br/>
        Please let us know if we can do anything else to help!
        </Paragraph>
        <Paragraph style={{color:"var(--green)"}}>
            We will send you confirmation email shortly.
        </Paragraph>
      </div>
      :
      <Redirect to="/auth"/>
      }
        
        </div>
    )
}
var mapState = (state)=>({
    user : state.user.currentUser
})
var actions = {
    clearCart
}
export default connect(mapState,actions)(Thankyou)
