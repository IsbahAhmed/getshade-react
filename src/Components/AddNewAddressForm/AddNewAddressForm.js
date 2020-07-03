import React, { useEffect, useState } from 'react'
import "./AddNewAddressForm.css"
import SimpleInput from '../SiimpleInput/SimpleInput'
import Select from '../Select/Select'
import { countries } from '../../Utility/Utility'
import Button from '../Button/Button'

const AddNewAddressForm = () => {
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
    return (
        <form className="add-new-address">
          <div style={{gridColumn:"1 / span 3"}}>
              <SimpleInput placeholder="Address..." label="ADDRESS"/>
          </div>
          <div className="s-cont">
              <Select label="SELECT COUNTRY" options={countryDetails} defaultOption="Select Country"/>
          </div>
          <div className="p-code">
          <SimpleInput placeholder="Postal code" label="POSTAL"/>

          </div>
          <div className="apt">
          <SimpleInput placeholder="Apt#" label="APT#"/>
          </div>
          <div className="">
              <Button value="ADD" style={{width:"100%",height:"5rem"}} colorScheme="black"/>
          </div>
        </form>
    )
}

export default AddNewAddressForm
