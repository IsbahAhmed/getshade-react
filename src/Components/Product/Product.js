import React from 'react'
import itemImage from "../../assets/img/item-1.jpg";
import  './Product.css'
const Product = (props) => {
var {imagePath,itemName,itemPrice,newArrival,style} = props

    return (
        
    <div className="item item-setting" style={{...style}} id="">
  <div className="pic">
    <div className="new">
      <p>New Arrival</p>
    </div>
    <img src={itemImage} alt />
  </div>
  <div className="text">
    <h3 className="itemname" name="item-name">Item 1</h3>
    <p id="price-1">2000</p>
  </div>
</div>


       
    )
}

export default Product
