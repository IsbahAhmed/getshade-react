import React from 'react'
import itemImage from "../../assets/img/item-1.jpg";
import  './Product.css'
import Paragraph from '../Paragraph/Paragraph';
import {useHistory as history} from "react-router-dom"
import QuickView from '../QuickView/QuickView';
import { useState } from 'react';
const Product = (props) => {
var {imagePath,itemName,itemPrice,newArrival,style,className} = props;
var [modalOpen,setModal] = useState(false)
var productDetail = ()=>{
  history.push("/productDetail")
}
    return (
        
<React.Fragment>
<div className={`item item-setting ${className}`} style={{...style}} id="">
   
   <div className="quick-view" onClick={()=> setModal(true)}>
   <Paragraph>
   Quick View 
   </Paragraph>
   </div>
<div className="pic">
 <div className="new">
   <p>New Arrival</p>
 </div>
 <img src={itemImage} />
</div>
<div className="text">
 <h3 className="itemname" name="item-name">Item 1</h3>
 <p id="price-1">2000</p>
</div>
</div>
{
  modalOpen ? 
  <QuickView setModal={setModal}/>
  :""
}
  </React.Fragment>
       
    )
}

export default Product
