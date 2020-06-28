import React from 'react'
import "./Addresses.css"
import AddressBoxList from '../AddressBoxList/AddressBoxList'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import AddNewAddressForm from '../AddNewAddressForm/AddNewAddressForm'
const Addresses = () => {
    return (
        <div className="custom-address">
            <div className="custom-address-main">
                <Heading style={{marginBottom:"0.5rem"}} fontSize="30">
                Addresses
                </Heading>
            <Paragraph style={{marginBottom:"3rem"}}>
            2 ENTRY

            </Paragraph>
            <AddressBoxList/>
            <Heading style={{marginTop:"3rem"}} fontSize="30">
            New Address

                </Heading>
                <AddNewAddressForm/>
            </div>
      
        </div>
    )
}

export default Addresses
