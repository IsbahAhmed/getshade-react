import React from "react";
import "./TopSeller.css";
import Product from "../Product/Product";
import ProductSlider from "../ProductSlider/ProductSlider"
import { connect } from "react-redux";
const TopSeller = ({ products }) => {
  return (
    <div className="top-seller">
      <div className="top-heading">
        <h3>Top Seller</h3>
        <div className="line" />
      </div>
      <div className="topmain">
      <ProductSlider products={products} />
 

      </div>
    </div>
  );
};
var mapState = (state) => ({
  products: state.products,
});
export default connect(mapState)(TopSeller);
