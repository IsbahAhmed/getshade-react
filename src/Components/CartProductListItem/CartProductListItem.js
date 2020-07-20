import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

import "./CartProductListItem.css"
import { connect } from 'react-redux'
import {removeItemFromCart} from "../../Redux/cartReducer/cartActions";
import Heading from '../Heading/Heading';
const CartProductListItem = ({cartItem,removeItemFromCart}) => {
    var {name,price,quantity,imagesLinks,color,productId} = cartItem;
    return (
        <div className="item-1 item-row-setting">
        <div className="improduct">
          <img src={imagesLinks[0].comp_url} className="thumb" alt="" />
          <div className="info">
            <Heading>
           {name}
            </Heading>
          <Paragraph>
              Color : {color}
          </Paragraph>
            <Paragraph fontSize="12" className="remove-cart-item" onClick={()=> removeItemFromCart(productId)}>
                Remove
            </Paragraph>
          </div>
        </div>
        <div className="item-price ">
            <Paragraph>
                Rs {price}
            </Paragraph>
        </div>
        <div className="quantity flex-center">
            <Paragraph>
                {quantity}
            </Paragraph>
        </div>
        <div className="total-price flex-center">
            <Paragraph>
                {price * quantity}
            </Paragraph>
        </div>
      </div>
      
    )
}
var actions = {
    removeItemFromCart
}
export default connect(null,actions)(CartProductListItem)
