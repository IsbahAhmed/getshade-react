import React, { useState } from "react";
import "./ProductDetail.css";
import ProductPreview from "../../Components/ProductPreview/ProductPreview";
import Paragraph from "../../Components/Paragraph/Paragraph";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";
import SimpleInput from "../../Components/SiimpleInput/SimpleInput";
import { getSiblings } from "../../Utility/Utility";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useHistory } from "react-router-dom"
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
const ProductDetail = (props) => {
  var {match:{params:{pId}}} = props;
  var history = useHistory();
 var productSwitcher = (pId,type)=>{
   pId = Number(pId);
   if(type === "prev"){
    if(pId > 1){
      pId = pId - 1;
    }
    }
    else{
      pId = pId+ 1;
    }
    
    console.log(pId)
   var link = `/productDetail/${pId}`
  history.push(link)
 }
    var [quantity,setQuantity] = useState(0)
    var colorSelector = (e)=>{
        var siblings = getSiblings(e.target)
        var ele = e.target;
        ele.classList.add("selected-color")
     
        siblings.forEach((sib)=>{
          sib.classList.remove("selected-color")
        })
    
      }
  return (
    <div className="productdetail-container">
      <div className="links">
        <Paragraph>
            <Link to="/">HOME</Link>/
            <Link to="/shop/all">SHOP</Link>
        </Paragraph>
        <Paragraph>
     <div className="prev-next-links">
     <div id="prev-link" onClick={()=> productSwitcher(pId,"prev")}>
   
       <FontAwesomeIcon flip="horizontal" icon={faGreaterThan}/>Prev

       </div> 
        |
        <div id="next-link" onClick={()=> productSwitcher(pId,"next")}>
 
          Next <FontAwesomeIcon icon={faGreaterThan}/>
        
        </div>
     </div>
            </Paragraph>
      </div>
      <ProductPreview />
      <div className="mainer ">
        <div className="p-description ">
          <Heading fontSize="25" fontWeight="600">
            Name
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            ut beatae! Mollitia voluptas ut quae dolore quibusdam dolorem libero
            molestias, laudantium quidem adipisci quod, ab itaque deserunt ex.
            Cum, quod.
          </Paragraph>
        </div>
        <div className="p-details">
          <Heading fontSize="25">Product Info</Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            natus perferendis quisquam? Quos in nostrum molestias, voluptas,
            omnis fugiat nam quo labore explicabo veniam adipisci rem velit
            voluptate, facilis eos.
          </Paragraph>
          {/*?php echo "".$row['p_name']."" ?*/}
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
        <div className="shipping-info"></div>
      </div>
      <div className="price-and-style">
    <Heading>
        Rs 2000

    </Heading>

    <SimpleInput width="6rem" placeholder="" value={quantity} 
    
    onChange={(e) => setQuantity(e.target.value)}
    type="number" min="0" max="9"/>
<div className="color-select-container" >
<div className="color-select selected-color"  style={{background:'var(--black)'}} onClick={colorSelector}></div>
            <div className="color-select" style={{background:'var(--yellow)'}} onClick={colorSelector}></div>
            <div className="color-select" style={{background:'var(--green)'}} onClick={colorSelector}></div>
</div>
       <Button value="ADD TO CART" colorScheme="black"/>
   
      </div>
    </div>
  );
};

export default ProductDetail;
