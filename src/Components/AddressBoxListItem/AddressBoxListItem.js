import React, { useState } from "react";
import "./AddressBoxListItem.css";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../Paragraph/Paragraph";

import { useEffect } from "react";
import { countryNameFind } from "../../Utility/Utility";
import { connect } from "react-redux";
import { deleteAddress } from "../../Redux/userReducer/userActions";

const AddressBoxListItem = ({address,deleteAddress,user}) => {
  var [drop_down, setDropDown] = useState(false);
  var {address,postal,country,relatedUser,addressId} = address;
  var {firstName,lastName} = user;
  var [countryName,setCountryName] = useState()
  useEffect(()=>{
   var name =  countryNameFind(country);
   setCountryName(name)
  },[country])

var handleAddressDelete = (addId)=>{
  var filteredAddressList = user.addressList.filter(({addressId})=> addressId !== addId);
  var userObj = {
    ...user,addressList:[...filteredAddressList]
  }
  deleteAddress(userObj)
}

  return (
    <div className="address-box">
      <div className="address-name">
        <Heading
          style={{ display: "flex", alignItems: "center", marginLeft: "2rem" }}
        >
          Address 1
        </Heading>
        <div
          className="ad-opt"
          onClick={
            drop_down ? () => setDropDown(false) : () => setDropDown(true)
          }
        >
          <FontAwesomeIcon icon={faEllipsisV} className="icon" />
        </div>
        <div className={`drop-down ${drop_down && "drop-down-on"}`}>
          <ul>
            <li >EDIT</li>
            <li onClick={()=> handleAddressDelete(addressId)}>DELETE</li>
          </ul>
        </div>
      </div>
      <div className="address-des">
        <Heading>WHERE</Heading>
        <Paragraph>
          {address}
          <br /> {postal}
          <br /> {countryName}
        </Paragraph>
        <Heading>TO</Heading>
        <Paragraph style={{textTransform:"capitalize"}}>{firstName+" "+lastName}</Paragraph>
      </div>
    </div>
  );
};
var mapState = (state)=>({
  user : state.user.currentUser
})
var actions = {
  deleteAddress
}
export default connect(mapState,actions)(AddressBoxListItem);
