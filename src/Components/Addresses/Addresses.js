import React from 'react'
import "./Addresses.css"
import AddressBoxList from '../AddressBoxList/AddressBoxList'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import AddNewAddressForm from '../AddNewAddressForm/AddNewAddressForm'
import { connect } from 'react-redux'
const Addresses = (props) => {
    var {user:{addressList}}=props;
    return (
        <div className="custom-address">
            <div className="custom-address-main">
                <Heading style={{marginBottom:"0.5rem"}} fontSize="30">
                Addresses
                </Heading>
            <Paragraph style={{marginBottom:"3rem"}}>
            {addressList.length} ENTRY
            </Paragraph>
            <AddressBoxList addressList={addressList}/>
            <Heading style={{marginTop:"3rem"}} fontSize="30">
            New Address

                </Heading>
                <AddNewAddressForm/>
            </div>
      
        </div>
    )
}
var mapState = (state)=>({
    user:state.user.currentUser
})
export default connect(mapState)(Addresses)
