import React, { useState } from 'react'
import "./ShopHeader.css"
import primaryImage from "../../assets/img/shop-primary-header.jpg";
import Heading from '../Heading/Heading';
import Product from '../Product/Product';
const ShopHeader = () => {
    var [filterScale,setFilterToggle] = useState(0)
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
        <div className="shop-grid">
          <div className="shop-filters">
            <Heading fontSize="23">Filter By</Heading>
            <div
              className="filter-row-setting"
              onClick={
                filterScale === 1
                  ? () => {
                      setFilterToggle(0);
                    }
                  : () => setFilterToggle(1)
              }
            >
              <div className="name-filter ">
                <Heading>Price</Heading>
                <div
                  className={`toggle-icon ${
                    filterScale === 1 ? "crossed" : ""
                  }`}
                >
                  <Heading fontSize="23">+</Heading>
                </div>
              </div>
              <div className="filter-options" style={filterScale === 1 ? {display:"block"}:{display:"none"}}>
               
              </div>
            </div>
          </div>
          <div className="shop-products">
            <div className="dropdown-row"></div>
            <div className="main-product-sec">
              <Product style={{ width: "30rem", height: "40rem" }} />
              <Product style={{ width: "30rem", height: "40rem" }} />
              <Product style={{ width: "30rem", height: "40rem" }} />
              <Product style={{ width: "30rem", height: "40rem" }} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default ShopHeader
