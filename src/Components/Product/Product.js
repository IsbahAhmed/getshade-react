import React from 'react'

import  './Product.css'
import Paragraph from '../Paragraph/Paragraph';
import {useHistory as history} from "react-router-dom"
import QuickView from '../QuickView/QuickView';
import { useState } from 'react';
import Heading from '../Heading/Heading';
const Product = ({productInfo,style,className}) => {
  var {imagesLinks,name,price,newArrival} = productInfo;

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
 <img src={imagesLinks[0].org_link} />
</div>
<div className="text">
    <Heading className="itemname" style={{textTransform:"capitalize"}} name="item-name">{name}</Heading>
 <Heading id="price-1">{price}</Heading>
</div>
</div>
{
  modalOpen ? 
  <QuickView setModal={setModal} productInfo={productInfo}/>
  :""
}
  </React.Fragment>
       
    )
}

export default Product
