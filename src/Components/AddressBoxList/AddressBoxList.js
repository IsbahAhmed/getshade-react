import React from "react";
import "./AddressBoxList.css";
import AddressBoxListItem from "../AddressBoxListItem/AddressBoxListItem";
import Heading from "../Heading/Heading";
const AddressBoxList = ({addressList,handleEdit}) => {
  var count = 0;
  return (
    
    <div className="addresses">
     { addressList.length ? addressList.map((address)=> {
       count++;
return (
  <AddressBoxListItem handleEdit={handleEdit} address={address} addressName= {count} key={address.addressId}/>
)

     } )
     : 
     <Heading>No addresses found.</Heading>}
    </div>
  );
};

export default AddressBoxList;
