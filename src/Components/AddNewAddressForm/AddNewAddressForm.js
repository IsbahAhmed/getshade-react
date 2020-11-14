import React, { useEffect, useState } from "react";
import "./AddNewAddressForm.css";
import SimpleInput from "../SiimpleInput/SimpleInput";
import Select from "../Select/Select";
import { countries } from "../../Utility/Utility";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addNewAddress } from "../../Redux/userReducer/userActions";
import { v4 as uuid } from "uuid";
import Paragraph from "../Paragraph/Paragraph";

const AddNewAddressForm = ({ user, addNewAddress, toEditAddress,setToEditAddress }) => {
  const [formValues, setFormValues] = useState({});

  ///checking edit address
  useEffect(() => {
    if (toEditAddress) {
      setFormValues({ ...toEditAddress[0] });
      setTextMsg(({
        msg:"",
        error:""
      }))
      window.scrollTo(0, 700);
    }
  }, [toEditAddress]);

  var { addressList = [] } = user;

  var [countryDetails, setCountryDetails] = useState([]);

  const [textMsg, setTextMsg] = useState({
    msg: "",
    error: "",
  });

  var handleFormValues = (e) => {
    var { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setTextMsg(({
      msg:"",
      error:""
    }))
  };

  var handleSubmit = async (e) => {
    e.preventDefault();
    //limiting addresses
    var { address, postal, country, apt, addressId } = formValues;
    console.log(addressId)
    if(addressList.length < 3 || addressId)
    {

      if (address && postal && country && apt && !addressId) {
        var addressObj = {
          ...formValues,
          addressId: uuid(),
        };
   
        var userObj = {
          ...user,
          addressList: [...addressList, addressObj],
        };
        var status = await addNewAddress(userObj, user.uid);
        if (status === "success") {
          setTextMsg({
            msg: `Address added successfully`,
          });
        } else {
          setTextMsg({ error: status });
        }
      }
  
  
      else if(address && postal && country && apt && addressId){
          var addressObj = {
              ...formValues
          }
          //filter old address with same id
          var filteredAddressList = addressList.filter((address)=> address.addressId !== addressId )
          var userObj = {
              ...user,
              addressList: [...filteredAddressList, addressObj],
            };
            var status = await addNewAddress(userObj, user.uid);
            if (status === "success") {
              setTextMsg({
                msg: `Address updated successfully`,
              });
            } else {
              setTextMsg({ error: status });
            }
      }
      else{
      setTextMsg({ error: "Invalid entries" });
      }
     
    }
    else{
      setTextMsg({ error: "You can add upto maximum 3 addresses." });

    }
  };

  useEffect(() => {
    var countryArray = [];
    countries.forEach(({ name, code }) => {
      countryArray.push({
        value: code,
        text: name,
      });
    });
    setCountryDetails(countryArray);
  }, []);


  var { address, postal, country, apt } = formValues;

  var {msg,error} = textMsg;
  return (
    <form className="add-new-address" onSubmit={handleSubmit}>
      <div style={{ gridColumn: "1 / span 3" }}>
        <SimpleInput
          placeholder="Address..."
          label="ADDRESS"
          name="address"
          value={address}
          onChange={handleFormValues}
          required
        />
      </div>
      <div className="s-cont">
        <Select
          label="SELECT COUNTRY"
          options={countryDetails}
          defaultOption="Select Country"
          name="country"
          value={country}
          onChange={handleFormValues}
          required
        />
      </div>
      <div className="p-code">
        <SimpleInput
          placeholder="Postal code"
          label="POSTAL"
          name="postal"
          value={postal}
          onChange={handleFormValues}
          required
        />
      </div>
      <div className="apt">
        <SimpleInput
          placeholder="Apt#"
          label="APT#"
          name="apt"
          value={apt}
          onChange={handleFormValues}
          required
        />
      </div>
      <div style={{ gridColumn: "1 / span 3" }}>
        {msg ? 
          <Paragraph style={{ color: "var(--green)" }}>{msg}</Paragraph>
         : error ? 
          <Paragraph style={{ color: "var(--red)" }}>{error}</Paragraph>
         : 
          ""
        }
      </div>
      <div className="edit-addressform-btn">
        <Button
          value={toEditAddress ? "EDIT":"ADD"}
          style={{ width: "100%", height: "5rem" }}
          colorScheme="black"
        />
       
      </div>
  {  (toEditAddress) && 
   <Paragraph className="cancel-edit" onClick={()=>setToEditAddress(null)}>
          Cancel Edit
        </Paragraph>}
    </form>
  );
};
var mapState = (state) => ({
  user: state.user.currentUser,
});
var actions = {
  addNewAddress,
};
export default connect(mapState, actions)(AddNewAddressForm);
