import React from 'react'
import "./ProductPreview.css"
import sample from "../../assets/img/authentic.jpg"
const ProductPreview = () => {
    return (
        
  <>
  <div className="product-preview flex-center">
    <img src={sample} /> 
  </div>
  <div className="multi-pics">
  <img src={sample} />   <img src={sample} />   <img src={sample} />   <img src={sample} /> 
  </div>
</>

        
    )
}

export default ProductPreview
