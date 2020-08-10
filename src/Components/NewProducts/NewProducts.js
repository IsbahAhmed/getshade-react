import React from "react";
import "./NewProducts.css";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Product from "../Product/Product";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
const NewProducts = (props) => {
  return (
    <div className="new-products">
      <div className="left-box">
        <Heading style={{ color: "white" }} fontSize="30">
          NEW <br /> PRODUCTS
        </Heading>
        <div className="line"></div>
       <Link to="/shop/all">
       <Button
          value="SHOP NOW"
          colorScheme="white"
          style={{
            color: "black",
            padding: "1.3rem 3rem",
            letterSpacing: "2px",
            marginTop: "5rem",
          }}
        />
       </Link>
      </div>
      <div className="right-sect">
        {props.products.length &&
          props.products.map((prod) => (
          <div key={prod.productId}>
                <Product
              
              productInfo={prod}
              style={{ width: "30rem", height: "30rem" }}
            />
          </div>
          ))}
      </div>
    </div>
  );
};
var mapState = (state) => ({
  products: state.products,
});
export default connect(mapState)(NewProducts);
