import React from "react";
import "./AddressBoxList.css";
import AddressBoxListItem from "../AddressBoxListItem/AddressBoxListItem";
import Heading from "../Heading/Heading";
const AddressBoxList = ({addressList}) => {
  return (
    <div className="addresses">
     { addressList.length ? addressList.map((address)=> <AddressBoxListItem address={address} key={address.addressId}/> )
     : 
     <Heading>No addresses found.</Heading>}
    </div>
  );
};

export default AddressBoxList;
