import React from "react";
import "./ShopProducts.css";
import Product from "../Product/Product";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ShopProducts = ({ products, catagory }) => {
  var [productSize, setProductSize] = useState({
    width: "30rem",
    height: "40rem",
  });
  const [productToShow, setProductToShow] = useState([]);
  const [productsArray, setProductsArray] = useState([]);
  const [productsLimit, setProductLimit] = useState(false);

  var productPoper = () => {
    var array = [];
    for (let i = 3; i > 0; i--) {
 
      var x = productsArray.pop();
 
      if (x) {
        array.push(x);
      } else {
        setProductLimit(true);
        break;
      }
    }

    setProductToShow((prevValue) => [...prevValue, ...array]);
  };

  useEffect(() => {
    //Component did mount
    var catagorizedProducts = ()=>{
    if(catagory === "all"){
      return [...products]
    }
    else{
      return products.filter(({type})=> catagory === type)
    }
    }
    
    setProductsArray([...catagorizedProducts()]);
  }, [products,catagory]);

  useEffect(() => {
    if (productsArray.length) {
      productPoper();
    }
  }, [productsArray]);

  var handleProductSize = () => {
    if (window.innerWidth <= 425) {
      setProductSize({
        width: "25rem",
        height: "35rem",
      });
    } else {
      setProductSize({
        width: "30rem",
        height: "40rem",
      });
    }
  };
  useEffect(() => {
    window.addEventListener("load", handleProductSize);
    window.addEventListener("resize", handleProductSize);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("load", handleProductSize);
      window.removeEventListener("resize", handleProductSize);
    };
  }, []);
  var { width, height } = productSize;

  return (
    <div className="shop-products">
      <div className="dropdown-row"></div>
      <div className="main-product-sec">
        {products.length > 0
          ? productToShow.map((prod) => (
              <Product
                key={prod.productId}
                productInfo={prod}
                className={"shop-product-item"}
                style={{ width, height }}
              />
            ))
          : ""}
      </div>
      <div className="flex-center" style={{position:"relative"}}>
        {!productsLimit && products.length ? (
          <Button
            value="Show more"
            style={{ width: "15rem", height: "5rem" }}
            onClick={productPoper}
            colorScheme="black"
          />
        ) : !products.length ? <LoadingSpinner/> : (
          <Paragraph>No more to show</Paragraph>
        )}
      </div>
    </div>
  );
};
var mapState = (state) => ({
  products: state.products,
});

export default connect(mapState)(ShopProducts);
