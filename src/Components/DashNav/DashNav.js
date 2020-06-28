import React from "react";
import "./DashNav.css";
import { Link, withRouter } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import { useState } from "react";
import { getSiblings } from "../../Utility/Utility";
import { useEffect } from "react";
const DashNav = (props) => {
  var [selectedNavLink, navLinkSetter] = useState("");

  useEffect(() => {
   navLinkSetter(props.location.pathname)
  }, [props.location.pathname])

  return (
    <div className="dash-nav">
      <Link
        to="/userProfile/123/"
      
        className={selectedNavLink === "/userProfile/123/" ? "selected-dash-nav-link":""}
      >
        <Paragraph>Profile</Paragraph>
      </Link>

      <Link to="/userProfile/123/orders" 
       className={selectedNavLink === "/userProfile/123/orders" ? "selected-dash-nav-link":""}>
        <Paragraph>Orders</Paragraph>
      </Link>
      <Link  className={selectedNavLink === "/userProfile/123/addresses" ? "selected-dash-nav-link":""} to="/userProfile/123/addresses">
        <Paragraph>Addresses</Paragraph>
      </Link>
      <Link  className={selectedNavLink === "/userProfile/123/payments" ? "selected-dash-nav-link":""} to="/userProfile/123/payments">
        <Paragraph>Payments</Paragraph>
      </Link>
      <Link  className={selectedNavLink === "/userProfile/123/wishlist" ? "selected-dash-nav-link":""} to="/userProfile/123/wishlist">
        <Paragraph>Wishlist</Paragraph>
      </Link>
    </div>
  );
};

export default withRouter(DashNav);
