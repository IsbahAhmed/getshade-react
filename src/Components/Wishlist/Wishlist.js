import React from 'react'
import "./Wishlist.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import WishListProducts from '../WishlistProducts/WishListProducts'
const Wishlist = () => {
    const [wishlistNumberOfItems,setwishlistNumberOfItems] = React.useState(0)
    return (
        <div className="wishlist-container"> 
           <div className="wishlist-main">
               <Heading fontSize="30">
               Wishlist
               </Heading>
               <Paragraph style={{marginTop:"0.5rem"}}>
               {wishlistNumberOfItems} Item(s) found

               </Paragraph>
                <WishListProducts setwishlistNumberOfItems={setwishlistNumberOfItems}/>
           </div>
        </div>
    )
}

export default Wishlist
