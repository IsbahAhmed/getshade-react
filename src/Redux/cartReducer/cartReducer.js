import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, SET_CART_ITEMS } from "./cartConstants";
import { addItemToCartHelper } from "../../Utility/Utility";

var initialState = []
var cartReducer = (state = initialState,actions)=>{
    var {payload,type} = actions;
    switch (type) {
       case ADD_TO_CART:
           return addItemToCartHelper(state,payload.item)
    case REMOVE_ITEM_FROM_CART:
        return state.filter((item)=> item.productId !== payload.itemId);
      case SET_CART_ITEMS:
          return payload.cart;
        default:
          return state;
    }
}
export default cartReducer