import React, { useState } from "react";
import "./ProductDetail.css";
import ProductPreview from "../../Components/ProductPreview/ProductPreview";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Heading from "../../Components/Heading/Heading";
import {connect} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory } from "react-router-dom"
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import AddToCartSection from "../../Components/AddToCartSection/AddToCartSection";
import { useEffect } from "react";
const ProductDetail = (props) => {
  var {match:{params:{serial}},products} = props;
  
  var history = useHistory();
const [desiredProduct,setDesiredProduct] = useState({})



  ///putting out desired product
useEffect(()=>{

if(products.length ){
  if(serial > products.length){
    history.push('/productDetail/1')
   }
  var obj = products.filter((prod)=> prod.serial == serial);
  setDesiredProduct(...obj)
}

},[products,serial])


 var productSwitcher = (serial,type)=>{
   serial = Number(serial);
   if(type === "prev"){
    if(serial > 1){
      serial = serial - 1;
    }
    }
    else{
      if(serial < products.length)
      serial = serial+ 1;
  
    }
    
   
   var link = `/productDetail/${serial}`
  history.push(link)
 }


 var {name,description,price,productId,imagesLinks = [],selectedColors} = desiredProduct; 

  return (
    <div className="productdetail-container">
      <div className="links">
        <Paragraph>
            <Link to="/">HOME</Link>/
            <Link to="/shop/all">SHOP</Link>
        </Paragraph>
        <Paragraph>
     <div className="prev-next-links">
     <div id="prev-link" onClick={()=> productSwitcher(serial,"prev")}>
   
       <FontAwesomeIcon flip="horizontal" icon={faGreaterThan}/>Prev

       </div> 
        |
        <div id="next-link" onClick={()=> productSwitcher(serial,"next")}>
 
          Next <FontAwesomeIcon icon={faGreaterThan}/>
        
        </div>
     </div>
            </Paragraph>
      </div>
      <ProductPreview imagesLinks={imagesLinks}/>
      <div className="mainer ">
        <div className="p-description ">
          <Heading fontSize="25" fontWeight="600">
        {name}
          </Heading>
          <Paragraph>
           {description}
          </Paragraph>
        </div>
        <div className="p-details">
          <Heading fontSize="25">Product Info</Heading>
          <Paragraph>
        {description}
          </Paragraph>
     
        </div>
        <div className="return-policy">
          <Heading fontSize="25">Refund Policy</Heading>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            cumque sapiente! Officiis voluptatem explicabo eos veritatis quo
            quasi laborum sunt, dolore aliquam fuga temporibus modi illum
            dignissimos ipsum voluptate. Placeat!
          </Paragraph>
        </div>
      
      </div>
    <AddToCartSection product={desiredProduct}/>
    </div>
  );
};
var mapState = (state)=>({
  products:state.products
})
export default connect(mapState)(ProductDetail);
