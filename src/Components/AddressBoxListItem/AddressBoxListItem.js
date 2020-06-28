import React, { useState } from "react";
import "./AddressBoxListItem.css";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../Paragraph/Paragraph";
import List from "../List/List";

const AddressBoxListItem = () => {
  var [drop_down, setDropDown] = useState(false);
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
            <li>EDIT</li>
            <li>DELETE</li>
          </ul>
        </div>
      </div>
      <div className="address-des">
        <Heading>WHERE</Heading>
        <Paragraph>
          1620 East Ayre Str Suite
          <br /> M3115662 Wilmington, DE 19804
          <br /> United States
        </Paragraph>
        <Heading>TO</Heading>
        <Paragraph>Michael Doe</Paragraph>
      </div>
    </div>
  );
};

export default AddressBoxListItem;
