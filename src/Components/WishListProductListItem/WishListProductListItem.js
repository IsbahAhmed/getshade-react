import React from 'react'
import "./WishListProductListItem.css"
import Product from '../Product/Product'

const WishListProductListItem = ({product}) => {
var {productId} = product;
  
    return (
        <div className="wishlist-item">
          <Product
                key={productId}
                productInfo={product}
                className={"shop-product-item"}
                style={{ width:"100%", height:"100%" }}
              />
        </div>
    )
}

export default WishListProductListItem
