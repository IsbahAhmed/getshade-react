import React, { useState } from 'react'
import "./AddToCartSection.css"
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import SimpleInput from '../SiimpleInput/SimpleInput'
import { getSiblings } from '../../Utility/Utility'
import {v4 as uuid} from "uuid"
import { useEffect } from 'react'
const AddToCartSection = ({productId,price,colors = []}) => {

  useEffect(()=>{
 if(colors.length){
  setColor([colors[0]])
 }
  },[colors])
  var [quantity,setQuantity] = useState(0)

    var [color,setColor] = useState()
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
        type="number" min="0" max="9"/>
    <div className="color-select-container" >
      {
        colors ? 
        colors.map((color)=>{
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
           <Button value="ADD TO CART" colorScheme="black"/>
       
          </div>
    )
}

export default AddToCartSection
