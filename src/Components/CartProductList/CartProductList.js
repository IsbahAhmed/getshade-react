import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import "./CartProductList.css"
import CartProductListItem from '../CartProductListItem/CartProductListItem'
import Heading from '../Heading/Heading'

const CartProductList = ({cart}) => {
    return (
        <div className="products">
    {
        cart.length ? cart.map((cartItem) => <CartProductListItem
        cartItem={cartItem}
        key={cartItem.productId}/>):
        (
            <Heading className="empty-cart">
                Your cart is empty
            </Heading>
        )
    }
     
           </div>
    )
}

export default CartProductList
