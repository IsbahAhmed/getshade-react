import { firestore } from "../../Firebase/firebase"
import { productCategorization } from "../../Utility/Utility";
import { SET_PRODUCTS } from "./productConstants";

export var fetchProducts = ()=> async (dispatch)=>{

    try {
        var products = []
        var productSnap = await firestore.collection('products').get();
        
        var counter = productSnap.docs.length;
        productSnap.forEach((doc)=>{
            products.push({...doc.data(),productId:doc.id,serial:counter})
            counter--;
        })
      
        dispatch({
            type:SET_PRODUCTS,
            payload:{
                products
            }
        })

    } catch (error) {
        console.log(error.message)
    }
}