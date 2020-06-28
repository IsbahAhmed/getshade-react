import React from 'react'
import "./WishListProductListItem.css"
import Product from '../Product/Product'
const WishListProductListItem = () => {
    return (
        <div className="wishlist-item">
            <Product style={{width:"100%",height:"100%"}}/>
        </div>
    )
}

export default WishListProductListItem
