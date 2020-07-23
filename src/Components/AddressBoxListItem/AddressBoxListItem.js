import React, { useState } from "react";
import "./AddressBoxListItem.css";
import Heading from "../Heading/Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../Paragraph/Paragraph";

import { useEffect } from "react";
import { countryNameFind } from "../../Utility/Utility";
import { connect } from "react-redux";
import { deleteAddress } from "../../Redux/userReducer/userActions";

const AddressBoxListItem = ({address,deleteAddress,user,handleEdit,addressName}) => {

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

///dropdown close on any other click
var dropdownCloser = (e)=>{
  var targetedDiv = e.target.classList[1];

  if(targetedDiv !== "drop-down-on" && drop_down === true){
    setDropDown(false)

  }
}

useEffect(()=>{
window.addEventListener("click",dropdownCloser);
return ()=>{
  window.removeEventListener("click",dropdownCloser)
}
},[drop_down])

  return (
    <div className="address-box">
      <div className="address-name">
        <Heading
          style={{ display: "flex", alignItems: "center", marginLeft: "2rem" }}
        >
          Address {addressName}
        </Heading>
        <div
          className="ad-opt"
          onClick={
            drop_down ? () => setDropDown(false) : () => setDropDown(true)
          }
        >
          <FontAwesomeIcon icon={faEllipsisV} className="icon" />
        </div>
        <div className={`drop-down ${drop_down && "drop-down-on"}`} name="dropdown">
          <ul>
            <li onClick={()=>handleEdit(addressId)}>EDIT</li>
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
