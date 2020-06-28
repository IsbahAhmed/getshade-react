import React from 'react'
import "./WishlistProducts.css"
import WishListProductListItem from '../WishListProductListItem/WishListProductListItem'
const WishListProducts = () => {
    return (
        <div className="wishlist-products">
            <WishListProductListItem/>
            <WishListProductListItem/>
            <WishListProductListItem/>
         
        </div>
    )
}

export default WishListProducts
