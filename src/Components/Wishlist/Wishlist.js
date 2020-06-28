import React from 'react'
import "./Wishlist.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import WishListProducts from '../WishlistProducts/WishListProducts'
const Wishlist = () => {
    return (
        <div className="wishlist-container"> 
           <div className="wishlist-main">
               <Heading fontSize="30">
               Wishlist
               </Heading>
               <Paragraph style={{marginTop:"0.5rem"}}>
               3 PRODUCT

               </Paragraph>
                <WishListProducts/>
           </div>
        </div>
    )
}

export default Wishlist
