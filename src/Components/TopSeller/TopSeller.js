import React from 'react'
import "./TopSeller.css"
import Product from '../Product/Product'
const TopSeller = () => {
    return (
     
            
    <div className="top-seller">
  <div className="top-heading">
    <h3>Top Seller</h3>
    <div className="line" />
  </div>
  <div className="topmain">
  <Product/>
  <Product/>
  <Product/>

  </div>
</div>


       
    )
}

export default TopSeller
