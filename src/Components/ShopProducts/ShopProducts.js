import React from "react";
import "./ShopProducts.css";
import Product from "../Product/Product";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";

const ShopProducts = ({ products }) => {

  
  var [productSize, setProductSize] = useState({
    width: "30rem",
    height: "40rem",
  });
  const [productToShow,setProductToShow] = useState([]);
  const [productsArray,setProductsArray] = useState([]);
  const [productsLimit,setProductLimit] = useState(false)
  var productPoper = ()=>{
  var array = []
for (let i = 3; i > 0; i--) {
 var x = productsArray.pop();
  if(x){
    array.push(x)
  }
  else{
    setProductLimit(true)
    break;
  }
}

setProductToShow((prevValue)=> ([...prevValue,...array]))

  }


  useEffect(()=>{
    //Component did mount
    setProductsArray([...products])
  
  },[products])

  useEffect(()=>{
    if(products.length > 0){
      productPoper()
     }
  },[productsArray])
  useEffect(()=>{
    console.log(productToShow)
  },[productToShow])

  var handleProductSize = () => {
    if (window.innerWidth <= 425) {
      setProductSize({
        width: "20rem",
        height: "30rem",
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
         ? productToShow.map((prod)=>   <Product
         key={prod.productId}
         productInfo={prod}
           className={"shop-product-item"}
     
           style={{ width, height }}
         />)
          : ""}
      </div>
      <div className="flex-center">
    {  
    !productsLimit ? 
    <Button value="Show more" style={{width:"15rem",height:"5rem"}} onClick={productPoper} colorScheme="black"/>
  : <Paragraph>No more to show</Paragraph>
  }
      </div>
    </div>
  );
};
var mapState = (state) => ({
  products: state.products
});
export default connect(mapState)(ShopProducts);
