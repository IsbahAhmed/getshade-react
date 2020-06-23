import React, { useEffect, useState } from 'react'
import "./ShippingForm.css"
import SimpleInput from '../SiimpleInput/SimpleInput'
import Select from '../Select/Select'
import { countries} from '../../Utility/Utility'

import PaymentOptions from '../PaymentOptions/PaymentOptions'
import Button from '../Button/Button'

const ShippingForm = (props) => {
    var [countryDetails,setCountryDetails] = useState([])
 useEffect(()=>{
     var countryArray = []
     countries.forEach(({name,code})=>{
     countryArray.push({
        value:code,
        text:name
    })
    })
    setCountryDetails(countryArray)
 },[])

    var [formValues,setFormValues] = useState({
        first_name:"Isbah",
        last_name:"Ahmed"
        ,
        email:"",
        address:"",
        apt:"",
        phoneNo:"",
        postalCode:"",
        country:"Select Country"

    })
    var {first_name,last_name,email,address,apt,phoneNo,postalCode,country} = formValues;
    return (
       
        <div className="shipping-form">
            <div className="breadCrumb">
       
            </div>
            <form >
              <div className="fname">
                  <SimpleInput label="First Name" value={first_name} 
                  onChange={setFormValues} placeholder="" readOnly/>
                  <SimpleInput 
                  value={last_name}
                  label="Last Name"
                  onChange={setFormValues}
                  value="Ahmed" placeholder="" readOnly/>
              </div>
              <div className="email">
                  <SimpleInput  
                  placeholder="Enter Email..." 
                  label="Email" 
                  value={email}
                  onChange={setFormValues}
                  required
                  />
              </div>
              <div className="billing">
                  <SimpleInput 
                  value={address}
                  placeholder="Enter Address" 
                  onChange={setFormValues}
                  label="Billing"/>
                  <SimpleInput placeholder="Apt#"
                  value={apt}
                  onChange={setFormValues}
                  label="Apt#"
                  required
                  />
              </div>
              <div className="phone">
                  <SimpleInput
                  value={phoneNo}
                  placeholder="Phone..."
                  onChange={setFormValues}
                  label="Phone" required/>
              </div>
              <div className="postal">
                  <SimpleInput placeholder="Postal Code"
                  value={postalCode}
                  onChange={setFormValues}
                  label="Postal Code"/>
                  <Select label="Select Country"  
                    onChange={setFormValues}
                  options={countryDetails} defaultOption={country}  required/>
              </div>
         {/* payment method */}
         <PaymentOptions/>
         <Button value="SUBMIT" style={{width:"12rem",height:"5rem",borderRadius:"2px"}}/>
            </form>
        </div>
    )
}

export default ShippingForm
