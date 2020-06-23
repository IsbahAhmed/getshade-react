import React from 'react'
import "./SideCartListItem.css"
import img from "../../assets/img/item-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
const SideCartListItem = (props) => {
    return (
    <div className="row-setting">
 <div className="remove-this">
 <FontAwesomeIcon icon={faTimes}/>
 </div>
  <div className="item-image-setting">
    <img src={img}  />
  </div>
  <div className="price-item-setting">
    <h1 id="cart-item-name"></h1>
    <h2>Qty: <span className="qty"></span></h2>
    <h2 id="price">Rs </h2>
  </div>
</div>

    )
}

export default SideCartListItem
