import React from 'react'
import "./ShopProducts.css"
import Product from '../Product/Product'
import { useEffect } from 'react'
import { useState } from 'react'
const ShopProducts = () => {
var [productSize,setProductSize] = useState({
  width:"30rem",
  height:"40rem"
})
var handleProductSize = ()=>{
if(window.innerWidth <= 425){
  setProductSize({
    width:"20rem",
    height:"30rem"
  })

}
else{
  setProductSize({
    width:"30rem",
    height:"40rem"
  })
}
}
useEffect(()=>{
window.addEventListener("load",handleProductSize)
window.addEventListener("resize",handleProductSize)
},[])
useEffect(()=>{
return ()=>{
  window.removeEventListener("load",handleProductSize)
  window.removeEventListener("resize",handleProductSize)
}
},[])
var {width,height} = productSize;
    return (
        <div className="shop-products">
            <div className="dropdown-row"></div>
            <div className="main-product-sec">
              <Product className={["shop-product-item"]} style={{ width, height}} />
              <Product className={["shop-product-item"]} style={{ width, height}} />
              <Product className={["shop-product-item"]} style={{ width, height}} />
            </div>
          </div>
    )
}

export default ShopProducts
