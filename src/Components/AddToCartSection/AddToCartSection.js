import React, { useState } from 'react'
import "./AddToCartSection.css"
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import SimpleInput from '../SiimpleInput/SimpleInput'
import { getSiblings } from '../../Utility/Utility'
const AddToCartSection = ({productId}) => {
    var [quantity,setQuantity] = useState(0)
    var colorSelector = (e)=>{
        var siblings = getSiblings(e.target)
        var ele = e.target;
        ele.classList.add("selected-color")
     
        siblings.forEach((sib)=>{
          sib.classList.remove("selected-color")
        })
    
      }
    return (
        <div className="price-and-style">
        <Heading>
            Rs 2000
    
        </Heading>
    
        <SimpleInput width="6rem" placeholder="" value={quantity} 
        
        onChange={(e) => setQuantity(e.target.value)}
        type="number" min="0" max="9"/>
    <div className="color-select-container" >
    <div className="color-select selected-color"  style={{background:'var(--black)'}} onClick={colorSelector}></div>
                <div className="color-select" style={{background:'var(--yellow)'}} onClick={colorSelector}></div>
                <div className="color-select" style={{background:'var(--green)'}} onClick={colorSelector}></div>
    </div>
           <Button value="ADD TO CART" colorScheme="black"/>
       
          </div>
    )
}

export default AddToCartSection
