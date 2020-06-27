import React from "react";
import "./DashNav.css";
import { Link, withRouter } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import { useState } from "react";
import { getSiblings } from "../../Utility/Utility";
const DashNav = (props) => {
  var [selectedNavLink, navLinkSetter] = useState("");
  var linkSelector = (e) => {
    var link = e.target;
    link.classList.add("selected-dash-nav-link");
    var siblings = getSiblings(link);
    // console.log(siblings)
    siblings.forEach((sib) => {
      sib.classList.remove("selected-dash-nav-link");
    });
  };
  return (
    <div className="dash-nav">
      <Link
        to="/userProfile/123/"
        onClick={linkSelector}
        className="selected-dash-nav-link"
      >
        <Paragraph>Profile</Paragraph>
      </Link>

      <Link to="/userProfile/123/orders" onClick={linkSelector} className="">
        <Paragraph>Orders</Paragraph>
      </Link>
      <Link onClick={linkSelector} className="" to="/userProfile/123/addresses">
        <Paragraph>Addresses</Paragraph>
      </Link>
      <Link onClick={linkSelector} className="" to="/userProfile/123/payments">
        <Paragraph>Payments</Paragraph>
      </Link>
      <Link onClick={linkSelector} className="" to="/userProfile/123/wishlist">
        <Paragraph>Wishlist</Paragraph>
      </Link>
    </div>
  );
};

export default withRouter(DashNav);
