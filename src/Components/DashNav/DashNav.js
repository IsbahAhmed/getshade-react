import React from "react";
import "./DashNav.css";
import { Link, withRouter } from "react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import { useState } from "react";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faList, faAddressBook, faHeart } from "@fortawesome/free-solid-svg-icons";
const DashNav = (props) => {
  var [selectedNavLink, navLinkSetter] = useState("");

  useEffect(() => {
    navLinkSetter(props.location.pathname);
  }, [props.location.pathname]);

  
  return (
    <div className="dash-nav">
 
      <Link
        to={`/userProfile/${props.uid}`}
        className={
          selectedNavLink === `/userProfile/${props.uid}`
            ? "selected-dash-nav-link"
            : ""
        }
      >
        <FontAwesomeIcon icon={faUser} className="dash-icon"/> <Paragraph>Profile</Paragraph>
      </Link>

      <Link
        to={`/userProfile/${props.uid}/orders`}
        className={
          selectedNavLink === `/userProfile/${props.uid}/orders`
            ? "selected-dash-nav-link"
            : ""
        }
      >
       <FontAwesomeIcon icon={faList} className="dash-icon"/>   <Paragraph>Orders</Paragraph>
      </Link>

      <Link
        to={`/userProfile/${props.uid}/addresses`}
        className={
          selectedNavLink === `/userProfile/${props.uid}/addresses`
            ? "selected-dash-nav-link"
            : ""
        }
      >
        <FontAwesomeIcon icon={faAddressBook} className="dash-icon"/>  <Paragraph>Addresses</Paragraph>
      </Link>

      <Link
        to={`/userProfile/${props.uid}/wishlist`}
        className={
          selectedNavLink === `/userProfile/${props.uid}/wishlist`
            ? "selected-dash-nav-link"
            : ""
        }
      >
       <FontAwesomeIcon icon={faHeart} className="dash-icon"/>   <Paragraph>Wishlist</Paragraph>
      </Link>
    </div>
  );
};

export default withRouter(DashNav);
