import React, { useState } from 'react'
import "./ShopHeader.css"
import primaryImage from "../../assets/img/shop-primary-header.jpg";
import Heading from '../Heading/Heading';
import Product from '../Product/Product';
import SimpleInput from '../SiimpleInput/SimpleInput';


const ShopHeader = () => {
   
    return (
      <React.Fragment>
        <div className="shop-header">
          <img src={primaryImage} alt="" />
          <div className="shop-header-text">
            <Heading
              style={{
                letterSpacing: "3px",
                fontFamily: "var(--font-raleway)",
              }}
              fontWeight="400"
              fontSize="30"
            >
              SHOP SUNGLASSES.
            </Heading>
          </div>
        </div>
   
      </React.Fragment>
    );
}

export default ShopHeader
