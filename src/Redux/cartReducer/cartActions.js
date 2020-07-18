import { ADD_TO_CART } from "./cartConstants";

export var addToCart = (item)=>({
    type:ADD_TO_CART,
    payload:{
        item
    }
})