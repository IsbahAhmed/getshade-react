import React from 'react'
import "./Shipping.css"
import ShippingForm from '../../Components/ShippingForm/ShippingForm'
import MiniCart from '../../Components/MiniCart/MiniCart'
const Shipping = (props) => {
    return (
        <div className="shipping-container">
            <ShippingForm/>
            <MiniCart/>
        </div>
    )
}

export default Shipping
