import React from 'react'
import "./NewProducts.css"
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Product from '../Product/Product'
const NewProducts = (props) => {
    return (
        <div className="new-products">
           
            <div className="left-box">
                <Heading style={{color:"white"}} fontSize="30">
                    NEW <br/> PRODUCTS
                </Heading>
                <div className="line"></div>
                <Button value="SHOP NOW"
                 colorScheme="white"
                  style={{color:"black",padding:"1.3rem 3rem",letterSpacing:"2px",marginTop:"5rem"}}/>
            </div>
            <div className="right-sect">
                <Product style={{width:"30rem",height:"30rem"}}/>
                <Product style={{width:"30rem",height:"30rem"}}/>
                <Product style={{width:"30rem",height:"30rem"}}/>
                <Product style={{width:"30rem",height:"30rem"}}/>
                <Product style={{width:"30rem",height:"30rem"}}/>
                <Product style={{width:"30rem",height:"30rem"}}/>
            </div>
        </div>
    )
}

export default NewProducts
