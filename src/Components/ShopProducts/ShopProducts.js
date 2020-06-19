import React from 'react'
import "./ShopProducts.css"
import Product from '../Product/Product'
const ShopProducts = () => {
    return (
        <div className="shop-products">
            <div className="dropdown-row"></div>
            <div className="main-product-sec">
              <Product style={{ width: "30rem", height: "40rem" }} />
              <Product style={{ width: "30rem", height: "40rem" }} />
              <Product style={{ width: "30rem", height: "40rem" }} />
              <Product style={{ width: "30rem", height: "40rem" }} />
            </div>
          </div>
    )
}

export default ShopProducts
