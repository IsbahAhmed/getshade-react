import React, { useState, useEffect } from 'react'
import "./PaymentOptions.css"
import Heading from '../Heading/Heading'
import SimpleInput from '../SiimpleInput/SimpleInput'
const PaymentOptions = ({setOrderObj}) => {
    var [selectedOpt,setOpt] = useState("debit");
  useEffect(()=>{
    if(selectedOpt){
        setOrderObj((prevValue)=>({
            ...prevValue,
            paymentMethod:selectedOpt
        }))
    }
  },[selectedOpt])
    return (
        <div className="payment-method">
        <Heading style={{flex:"50%",marginLeft:"1rem"}}>
              Select Payment Method
        </Heading>
       <div className="" style={{flex:"25%",display:"flex"}}>
       <SimpleInput style={{width:"2rem",height:"2rem",margin:"0.3rem"}} name="debit" 
       checked={selectedOpt === "debit" ? true : false} 
       onChange={()=> setOpt("debit")}
       type="radio" label=""/>
       <Heading style={{marginTop:"0.2rem"}}>
           Via Card
       </Heading>
          
       </div>
       <div className="" style={{flex:"25%",display:"flex"}}>
       <SimpleInput 
       style={{width:"2rem",height:"2rem",margin:"0.3rem"}} 
       checked={selectedOpt === "cod" ? true : false}
       name="cod" type="radio" 
       onChange={()=> setOpt("cod")}
       label=""/>
       <Heading style={{marginTop:"0.2rem"}}>
           COD
       </Heading>
          
       </div>
    </div>
    )
}

export default PaymentOptions
