import React, { useState, useEffect } from 'react'
import "./WishlistProducts.css"
import WishListProductListItem from '../WishListProductListItem/WishListProductListItem'
import { connect } from 'react-redux';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

const WishListProducts = ({products,wishlist,setwishlistNumberOfItems}) => {
    const [productToShow, setProductToShow] = useState([]);
    const [productsArray, setProductsArray] = useState([]);
    const [wishlistContainer,setWishlistContainer] = useState([]);
    const [productsLimit, setProductLimit] = useState(false);
    var productPoper = () => {
        var array = [];
        for (let i = 3; i > 0; i--) {
          var x = productsArray.pop();
       
          if (x) {
            array.push(x);
          } else {
            setProductLimit(true);
            break;
          }
        }
    
        setProductToShow([...array]);
      };
  //setting wishlist container
  useEffect(()=>{
   var tempArr = [];
   if(products.length && wishlist.length){
       wishlist.forEach(({productId})=>{
           products.forEach(prod => {
               if(prod.productId === productId){
                   tempArr.push(prod)
               }
           })
       })
  
       setWishlistContainer(tempArr)
   }
  },[wishlist])

    useEffect(() => {
      //Component did mount
    if(wishlistContainer.length){
        setProductsArray([...wishlistContainer]);
        setwishlistNumberOfItems(wishlistContainer.length)
    }
    }, [wishlistContainer]);
  
    useEffect(() => {
      if (productsArray.length > 0) {
        productPoper();
      }
    }, [productsArray]);
    
    return (
        <>
    <div className="wishlist-products">

           {wishlistContainer.length 
          ? productToShow.map((prod) => (
             <WishListProductListItem product={prod} key={prod.productId}/>
            ))
          :""}
         
         
        </div>
          <div className="flex-center" style={{margin:"3rem 0"}}>
          {!productsLimit && wishlistContainer.length ? (
            <Button
              value="Show more"
              style={{ width: "15rem", height: "5rem" }}
              onClick={productPoper}
              colorScheme="black"

            />
          ) : wishlistContainer.length <= 3 ?  " " :(
            <Paragraph>No more to show</Paragraph>
          )}
        </div>
        </>
    )
}
var mapState = (state)=>({
    wishlist : state.wishlist,
    products : state.products
})
export default connect(mapState)(WishListProducts)
