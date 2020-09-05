import React, { useState } from 'react'
import "./AddToCartSection.css"
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import SimpleInput from '../SiimpleInput/SimpleInput'
import { getSiblings } from '../../Utility/Utility'
import {v4 as uuid} from "uuid"
import {connect} from "react-redux"
import { useEffect } from 'react'
import {addToCart} from "../../Redux/cartReducer/cartActions"
import { useAlert } from 'react-alert'
const AddToCartSection = ({product,addToCart}) => {
var alert = useAlert()

var {productId,price,selectedColors = []}=product;
var [color,setColor] = useState()
  useEffect(()=>{
 if(selectedColors.length){
  setColor([selectedColors[0]])
 }
  },[selectedColors])
  var [quantity,setQuantity] = useState(1)

    var colorSelector = (e)=>{
        var siblings = getSiblings(e.target)
        var ele = e.target;

        ele.classList.add("selected-color")
     
        siblings.forEach((sib)=>{
          sib.classList.remove("selected-color")
        })
        setColor(ele.color)
      }
     var bool = true; 
    return (
        <div className="price-and-style">
        <Heading>
            Rs {price}
    
        </Heading>
    
        <SimpleInput width="6rem" placeholder="" value={quantity} 
        
        onChange={(e) => setQuantity(e.target.value)}
        type="number" min="1" max="9"/>
    <div className="color-select-container" >
      {
        selectedColors ? 
        selectedColors.map((color)=>{
          if(bool){
            bool = false;
            return(
              <div className="color-select selected-color" key={uuid()} color={color} style={{background:`var(--${color})`}} onClick={colorSelector}></div>
            )
          }
          else{
            return  <div className="color-select" key={uuid()} color={color} style={{background:`var(--${color})`}} onClick={colorSelector}></div>
          }
        })
        :""
      }
 
    </div>
           <Button value="ADD TO CART" 
           onClick={()=>{
            addToCart({...product,color,quantity})
            alert.success("Item Added")
           }} 
           colorScheme="black"/>
       
          </div>
    )
}
var actions = {
  addToCart
}
export default connect(null,actions)(AddToCartSection)
