import React from 'react'
import "./MiniCart.css"
import Heading from '../Heading/Heading'
import SideCartList from '../Sidecart_ItemList/SideCartList'
import DiscountForm from '../DiscountForm/DiscountForm'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { subtotal_calculator } from '../../Utility/Utility'
import { useState } from 'react'
const MiniCart = ({cart,setOrderObj}) => {
const [subtotal,setSubtotal] = useState(0)
const [shippingCost,setShippingCost] = useState(100)
const [cartItemsIds,setCartItemIds] = useState([]) 
    useEffect(()=>{
        if(cart.length){
            var subtotal = subtotal_calculator(cart)
            setSubtotal(subtotal)
            var cartItemsArray = [];
            cart.forEach(cartItem => {
                cartItemsArray.push(`${cartItem.productId}`)
            });
            setCartItemIds(cartItemsArray)
        }
    },[cart])
    useEffect(()=>{
        if(cart.length){
            setOrderObj((prevValue)=>({
                ...prevValue,
                subtotal,shippingCost,orderedItems:cartItemsIds
            }))
        }
    },[cart,subtotal,shippingCost])
    return (
        <div className="mini-cart">
            <div className="mini-cart-main">
                <Heading>
                    Your Cart
                </Heading>
                <div className="mini-cart-list-items">
                    <SideCartList cart={cart}/>
                </div>
                <div className="discount-form-container flex-center">
                <DiscountForm />
            
            </div>
                <div className="amounts">
                    <div className="st">
                        <Heading>
                            Subtotal
                        </Heading>
                    </div>
                    <div className="st-am">
                    <Heading>
                      Rs {subtotal}
                        </Heading>
                    </div>
                    <div className="sh">
                    <Heading>
                           Shipping
                        </Heading>
                    </div>
                    <div className="sh-am">
                    <Heading>
                            Rs {shippingCost}
                        </Heading>
                    </div>
                </div>
              <div className="tot">
                  <Heading>
                      Total
                  </Heading>
                  <Heading>
                      Rs {
                          subtotal + shippingCost
                      }
                  </Heading>
              </div>
            </div>
            
        </div>
    )
}
var mapState = (state)=>({
    cart : state.cart
})
export default connect(mapState)(MiniCart)
