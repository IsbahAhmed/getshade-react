import React from 'react'
import "./Shipping.css"
import ShippingForm from '../../Components/ShippingForm/ShippingForm'
import MiniCart from '../../Components/MiniCart/MiniCart'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useState } from 'react'

const Shipping = ({user,match:{params:{uid}}}) => {
    
const [orderObj,setOrderObj] = useState({orderedBy:uid})

    return (
        <div className="shipping-container">
          {
              user && user.emailVerified &&  user.uid === uid ? 
        <>
              <ShippingForm orderObj={orderObj} setOrderObj={setOrderObj}/>
              <MiniCart setOrderObj={setOrderObj}/>
        </>
              : 
              <Redirect to="/auth"/>
          }
        </div>
    )
}
var mapState = (state)=>({
    user:state.user.currentUser
})
export default connect(mapState)(Shipping)
