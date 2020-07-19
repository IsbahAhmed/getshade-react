import React, { useEffect } from "react";
import arrow from "../../assets/img/right-arrow.svg";
import Button from "../Button/Button";
import "./SideCart.css";
import { useState } from "react";

import SideCartItemList from "../Sidecart_ItemList/SideCartList";
import Heading from "../Heading/Heading";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  retriveCartData_from_SessionStorage,
} from "../../Redux/cartReducer/cartActions";
import { subtotal_calculator } from "../../Utility/Utility";

const SideCart = (props) => {
  var {
    cartToglleHandler,
    cartToggleValue,
    initialRender,
    cart,
    removeItemFromCart,
    retriveCartData_from_SessionStorage,
  } = props;
  var [wrapperDisplay, setWrapperDisplay] = useState("none");
  const [subtotal,setSubtotal] = useState(0)
  //retriving data from session storage

  useEffect(() => {
    retriveCartData_from_SessionStorage();
  }, []);

////



  useEffect(()=>{
    if(cart.length){
        var subtotal = subtotal_calculator(cart);
        setSubtotal(subtotal);
        
    }
  },[cart])

  useEffect(() => {
    // effect
    if (cartToggleValue) {
      setTimeout(() => {
        setWrapperDisplay("block");
      }, 100);
    } else {
      setTimeout(() => {
        setWrapperDisplay("none");
      }, 300);
    }
  }, [cartToggleValue]);

 
  return (
    <React.Fragment>
      <div
        className={
          cartToggleValue
            ? "black-wrapper wrapper-on"
            : "black-wrapper wrapper-off"
        }
        style={{ display: `${wrapperDisplay}` }}
        onClick={() => cartToglleHandler(false)}
      ></div>

      {initialRender ? (
        <div
          className={
            cartToggleValue
              ? " cart-view cart-on-ani"
              : "cart-view cart-off-ani"
          }
          id="cart-view"
        >
          <div className="cart-off">
            <div
              className="arrow-btn flex-center cart-off-btn"
              onClick={() => cartToglleHandler(false)}
            >
              <img src={arrow} alt="" />
            </div>
            <Heading style={{ alignSelf: "center" }}>CART</Heading>
          </div>
          <div className="item-list">
            <SideCartItemList
              cart={cart}
              removeItemFromCart={removeItemFromCart}
            />
          </div>
          <div className="amount-total">
            <h2>SUBTOTAL</h2>
            <h2>
              Rs {subtotal}
              
            </h2>
            <div className="view-cart-btn">
              <Button value="View Cart" />
            </div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
var mapState = (state) => ({
  cart: state.cart,
});
var actions = {
  removeItemFromCart,
  retriveCartData_from_SessionStorage,
};
export default connect(mapState, actions)(SideCart);
