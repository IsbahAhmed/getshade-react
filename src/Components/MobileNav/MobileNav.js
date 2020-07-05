import React from "react";
import "./MobileNav.css";
import logo from "../../assets/img/logo-plane.png";
import cartIcon from "../../assets/img/shopping-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Link } from "react-router-dom";

const MobileNav = () => {
  var [mobile_menuStyle, toggleMobileMenu] = useState({
    display: "none",
    opacity: "0",
  });
  var [displayValue, setDisplayValue] = useState(false);


  var timeOut_1 = () => setTimeout(() => {
    toggleMobileMenu((prevState) => {
      return {
        ...prevState,
        opacity: "1",
      };
    });
  }, 300);
  var  timeOut_2 = () =>  setTimeout(() => {
    toggleMobileMenu((prevState) => {
      return {
        ...prevState,
        display: "none",
      };
    });
  }, 300);
  var mobileMenuOn = () => {
    if (displayValue) {

      timeOut_1()
      toggleMobileMenu((prevState) => ({
        ...prevState,
        display: "grid",
      }));
    } else {
      timeOut_2()
      toggleMobileMenu((prevState) => ({
        ...prevState,
        opacity: "0",
        
      }));
    }
  };

  return (
    <div>
      <div className="mobile-nav">

        <div className="m-menu flex-center">
          {/* <img src="img/menu.svg" id="ham" /> */}
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setDisplayValue(true)}
          />
        </div>
        <div className="m-logo flex-center">
          <img src={logo} />
        </div>
        <div className="m-cart flex-center cart-123">
         <Link to="/cart">
         <img src={cartIcon} />
         </Link>
          <div className="cart-count flex-center" />
        </div>
      </div>
      <MobileMenu
      timeOut_1={timeOut_1}
      timeOut_2={timeOut_2}
        mobile_menuStyle={mobile_menuStyle}
        mobileMenuOn={mobileMenuOn}
        setDisplayValue={setDisplayValue}
        displayValue={displayValue}
      />
    </div>
  );
};

export default MobileNav;
