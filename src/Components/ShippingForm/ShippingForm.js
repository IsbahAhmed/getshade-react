import React, { useEffect, useState } from "react";
import "./ShippingForm.css";
import SimpleInput from "../SiimpleInput/SimpleInput";
import Select from "../Select/Select";
import { countries, getSiblings } from "../../Utility/Utility";

import PaymentOptions from "../PaymentOptions/PaymentOptions";
import Button from "../Button/Button";
import { connect } from "react-redux";
import Heading from "../Heading/Heading";
import { placeNewOrder } from "../../Redux/orders/orderActoins";
import { serverTimeStamp } from "../../Firebase/firebase";
import { useHistory } from "react-router-dom";
import { addOrderIdtoUser } from "../../Redux/userReducer/userActions";
import Paragraph from "../Paragraph/Paragraph";

const ShippingForm = ({
  user,
  placeNewOrder,
  setOrderObj,
  orderObj,
  addOrderIdtoUser,
}) => {
  var { firstName, lastName, addressList = [] } = user;
  const [statusMsg, setStatusMsg] = useState({});
  const [disabled, setDisabled] = useState(false);
  var history = useHistory();
  var [countryDetails, setCountryDetails] = useState([]);

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

  var addressSellector = (addId, addressNode) => {
    var desiredAdrress = addressList.filter(
      ({ addressId }) => addressId === addId
    );

    var { postal, address, apt, country } = desiredAdrress[0];
    setFormValues((preValues) => ({
      ...preValues,
      postalCode: postal,
      address,
      apt,
      country,
    }));

    var siblings = getSiblings(addressNode);
    addressNode.style.background = "rgba(88, 88, 88, 0.363)";
    siblings.forEach((sib) => {
      sib.style.background = "white";
    });
  };

  var [formValues, setFormValues] = useState({
    first_name: firstName,
    last_name: lastName,
  });
  var handleFormValues = (e) => {
    var { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  var handleSubmit = async (e) => {
    e.preventDefault();
    var {
      first_name,
      last_name,
      email,
      address,
      apt,
      phoneNo,
      postalCode,
      country,
    } = formValues;

    if (
      first_name &&
      last_name &&
      email &&
      address &&
      apt &&
      phoneNo &&
      postalCode &&
      country
    ) {
      setDisabled(true);
      var shippingInfo = {
        ...formValues,
        orderedAt: serverTimeStamp(),
      };
      var orderId = await placeNewOrder({ ...orderObj, shippingInfo,orderStatus:'pending' });
      if (orderId === "error") {
        setStatusMsg({ error: "An error occured" });
      } else {
        addOrderIdtoUser(orderId);
        history.push(`/thankyou/${orderId}`)
      }
      setDisabled(false);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var {
    first_name,
    last_name,
    email,
    address,
    apt,
    phoneNo,
    postalCode,
    country,
  } = formValues;
  var addressNameCount = 0;
  return (
    <div className="shipping-form">
      <div className="breadCrumb"></div>
      <form onSubmit={handleSubmit}>
        <div className="fname">
          <SimpleInput
            label="First Name"
            name="first_name"
            value={first_name}
            onChange={handleFormValues}
            placeholder=""
            readOnly
            disabled={disabled}
          />
          <SimpleInput
            value={last_name}
            label="Last Name"
            name="last_name"
            onChange={handleFormValues}
            value="Ahmed"
            placeholder=""
            readOnly
            disabled={disabled}
          />
        </div>
        <div className="email">
          <SimpleInput
            placeholder="Enter Email..."
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={handleFormValues}
            required
            disabled={disabled}
          />
        </div>
        <div className="billing">
          <SimpleInput
            value={address}
            placeholder="Enter Address"
            name="address"
            onChange={handleFormValues}
            label="Billing"
            disabled={disabled}
          />
          <SimpleInput
            placeholder="Apt#"
            name="apt"
            value={apt}
            onChange={handleFormValues}
            label="Apt#"
            required
            disabled={disabled}
          />
        </div>
        {addressList.length && (
          <div className="address-list">
            {addressList.map(({ addressId }) => {
              addressNameCount++;
              return (
                <div
                  className="flex-center"
                  key={addressId}
                  name={addressId}
                  onClick={(e) => addressSellector(addressId, e.target)}
                >
                  <Heading style={{ pointerEvents: "none" }}>
                    Address {addressNameCount}
                  </Heading>
                </div>
              );
            })}
          </div>
        )}
        <div className="phone">
          <SimpleInput
            name="phoneNo"
            value={phoneNo}
            placeholder="Phone..."
            onChange={handleFormValues}
            label="Phone"
            required
            disabled={disabled}
          />
        </div>
        <div className="postal">
          <SimpleInput
            name="postalCode"
            placeholder="Postal Code"
            value={postalCode}
            onChange={handleFormValues}
            label="Postal Code"
            disabled={disabled}
          />
          <Select
            name="country"
            label="Select Country"
            onChange={handleFormValues}
            options={countryDetails}
            value={country}
            required
            disabled={disabled}
          />
        </div>
        {statusMsg.error && <Paragraph style={{color:"var(--red)"}}>{statusMsg.error}</Paragraph>}

        {/* payment method */}

        <PaymentOptions setOrderObj={setOrderObj} />
        <Button
          value="SUBMIT"
          style={{ width: "12rem", height: "5rem", borderRadius: "2px" }}
          disabled={disabled}
        />
      </form>
    </div>
  );
};
var mapState = (state) => ({
  user: state.user.currentUser,
});
var actions = {
  placeNewOrder,
  addOrderIdtoUser,
};
export default connect(mapState, actions)(ShippingForm);
