import React from 'react'
import "./SideCartListItem.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Heading from '../Heading/Heading'
const SideCartListItem = (props) => {
  var {removeItemFromCart,cartItem:{name,imagesLinks,quantity,productId,price,color}}= props
    return (
    <div className="row-setting">
 <div className="remove-this" onClick={()=>removeItemFromCart(productId)}>
 <FontAwesomeIcon style={{pointerEvents:"none"}} icon={faTimes} />
 </div>
  <div className="item-image-setting">
    <img src={imagesLinks[0].comp_url} alt="" />
  </div>
  <div className="price-item-setting">
    <Heading>{name}</Heading>
    <Heading>Qty: {quantity}</Heading>
    <Heading>Color: {color}</Heading>
    <Heading id="price">Rs {price}</Heading>
  </div>
</div>

    )
}

export default SideCartListItem
