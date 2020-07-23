import React from 'react'
import "./Addresses.css"
import AddressBoxList from '../AddressBoxList/AddressBoxList'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import AddNewAddressForm from '../AddNewAddressForm/AddNewAddressForm'
import { connect } from 'react-redux'
import { useState } from 'react'
const Addresses = (props) => {
    var {user:{addressList = []}}=props;
    const [toEditAddress,setToEditAddress] = useState()
    var handleEdit = (addId)=>{
        console.log(addId)
        var desiredAddress = addressList.filter(({addressId})=> addressId === addId);
        setToEditAddress(desiredAddress)
    }
    return (
        <div className="custom-address">
            <div className="custom-address-main">
                <Heading style={{marginBottom:"0.5rem"}} fontSize="30">
                Addresses
                </Heading>
            <Paragraph style={{marginBottom:"3rem"}}>
            {addressList.length} ENTRY(IES)
            </Paragraph>
            <AddressBoxList handleEdit={handleEdit} addressList={addressList}/>
            <Heading style={{marginTop:"3rem"}} fontSize="30">
            New Address

                </Heading>
                <AddNewAddressForm toEditAddress={toEditAddress}/>
            </div>
      
        </div>
    )
}
var mapState = (state)=>({
    user:state.user.currentUser
})
export default connect(mapState)(Addresses)
