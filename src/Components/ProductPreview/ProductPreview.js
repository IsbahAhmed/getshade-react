import React from 'react'
import "./ProductPreview.css"
import sample from "../../assets/img/authentic.jpg"
import { useState } from 'react'
const ProductPreview = () => {
  var [selectedImage,imageSelector] = useState(sample)
 console.log(selectedImage)
    return (
<React.Fragment>
  <div className="product-preview flex-center">
    <img src={selectedImage} /> 
  </div>
  <div className="multi-pics">
  <img src={sample}/>   <img src={sample} />   <img src={sample} />   <img src={sample} /> 
  {/* array.map((img)=> <img src={img.img.smallImgSrc} onClick={()=> imageSelector(img.img.largeImgSrc)}}/>) */}
  </div>
  </React.Fragment>


        
    )
}

export default ProductPreview
