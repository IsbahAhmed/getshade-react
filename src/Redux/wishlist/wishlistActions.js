import { firestore } from "../../Firebase/firebase"
import { ADD_TO_WISHLIST,SET_WISHLIST, REMOVE_FROM_WISHLIST } from "./wishlistConstants"

export var addToWishlist = (wishlistItem) => async (dispatch)=>{
   try {
       await firestore.collection('wishlist').add(wishlistItem)
       dispatch({
           type: ADD_TO_WISHLIST,
           payload:{
               wishlistItem
           }
       })
   } catch (error) {
       console.log(error.message)
   }
}

export var fetchWishlistItems = (userId)=>async (dispatch)=>{
    try {
        var wishlist = [];
        var wishlistSnap = await firestore.collection('wishlist')
        .where("addedBy","==",userId).get();
        wishlistSnap.forEach((doc)=>{
            wishlist.push({...doc.data(),wishlistItemId:doc.id})
        })
        dispatch({
            type: SET_WISHLIST,
            payload:{
                wishlist
            }
        })
    } catch (error) {
       console.log(error.message)
        
    }
}
export var removeFromWishlist = (wishlistItemId)=> async (dispatch)=>{
  
    try {
        await firestore.collection('wishlist').doc(wishlistItemId).delete()
        dispatch({
            type:REMOVE_FROM_WISHLIST,
            payload:{
                wishlistItemId
            }
        })
    } catch (error) {
       console.log(error.message)
        
    }
}