import React, { useState } from 'react'
import "./PaymentOptions.css"
import Heading from '../Heading/Heading'
import SimpleInput from '../SiimpleInput/SimpleInput'
const PaymentOptions = (props) => {
    var [selectedOpt,setOpt] = useState("debit");
    var optionSelector = (name)=>{
        if(name === "debit") {

        }
    }
    return (
        <div className="payment-method">
        <Heading style={{flex:"50%",marginLeft:"1rem"}}>
              Select Payment Method
        </Heading>
       <div className="" style={{flex:"25%",display:"flex"}}>
       <SimpleInput style={{width:"2rem",height:"2rem",margin:"0.3rem"}} name="debit" 
       checked={selectedOpt === "debit" ? true : false} 
       onClick={()=> setOpt("debit")}
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
       onClick={()=> setOpt("cod")}
       label=""/>
       <Heading style={{marginTop:"0.2rem"}}>
           COD
       </Heading>
          
       </div>
    </div>
    )
}

export default PaymentOptions
