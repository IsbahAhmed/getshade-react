import React from 'react'
import "./MiniCart.css"
import Heading from '../Heading/Heading'
import SideCartItemList from '../Sidecart_ItemList/SideCartList'
import DiscountForm from '../DiscountForm/DiscountForm'
const MiniCart = () => {
    return (
        <div className="mini-cart">
            <div className="mini-cart-main">
                <Heading>
                    Your Cart
                </Heading>
                <div className="mini-cart-list-items">
                    <SideCartItemList />
                </div>
                <div className="discount-form-container flex-center">
                <DiscountForm/>
            
            </div>
                <div className="amounts">
                    <div className="st">
                        <Heading>
                            Subtotal
                        </Heading>
                    </div>
                    <div className="st-am">
                    <Heading>
                      Rs 2880
                        </Heading>
                    </div>
                    <div className="sh">
                    <Heading>
                           Shipping
                        </Heading>
                    </div>
                    <div className="sh-am">
                    <Heading>
                            Rs 0
                        </Heading>
                    </div>
                </div>
              <div className="tot">
                  <Heading>
                      Total
                  </Heading>
                  <Heading>
                      Rs 2880
                  </Heading>
              </div>
            </div>
            
        </div>
    )
}

export default MiniCart
