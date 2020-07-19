import React from 'react'
import SideCartListItem from '../SideCart_ListItem/SideCartListItem'


const SideCartItemList = ({cart,removeItemFromCart}) => {
    return (
        <React.Fragment>
           {
               cart ? cart.map((cartItem)=> <SideCartListItem key={cartItem.productId}
               cartItem={cartItem}
               removeItemFromCart={removeItemFromCart}/>):""
           } 

        </React.Fragment>
    )
}

export default SideCartItemList
