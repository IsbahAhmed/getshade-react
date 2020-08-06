import { ADD_TO_CART,REMOVE_ITEM_FROM_CART, SET_CART_ITEMS, CLEAR_CART } from "./cartConstants";
import { addCartItemTo_SessionStorage, removeItemFrom_SessionStorage } from "../../Utility/Utility";

export var addToCart = (item)=>{
    addCartItemTo_SessionStorage(item);
  return{  type:ADD_TO_CART,
    payload:{
        item
    }}
}
export var removeItemFromCart = (itemId)=>{
    removeItemFrom_SessionStorage(itemId) 

return    {type:REMOVE_ITEM_FROM_CART,
payload:{
    itemId
}}
}

export var retriveCartData_from_SessionStorage = ()=>{
var retrivedData = sessionStorage.getItem("cart");
var cart = [];
if(retrivedData){
cart = JSON.parse(retrivedData);
}

return {
    type:SET_CART_ITEMS,
    payload:{
        cart
    }
}
}
export var clearCart = ()=>{
    sessionStorage.clear();
    return {
        type: CLEAR_CART,
     
    }
}
