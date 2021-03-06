import React, { useState, useEffect } from 'react'
import SimpleInput from '../SiimpleInput/SimpleInput'
import Button from '../Button/Button'
import "./DiscountForm.css"
const DiscountForm = () => {
   
    var [inputValue,setInputValue] = useState("");

    return (
     
    <form action="" className="flex-center discount-form">
    <SimpleInput value={inputValue} onChange={(e)=> setInputValue(e.target.value)} width="100%" label="" placeholder="Enter discount coupon" required/>
          <Button value="Apply" style={{width:"8rem",height:"5rem",marginTop:"5px"}}/>
    </form>

    )
}

export default DiscountForm
