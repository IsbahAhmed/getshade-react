import { ADD_TO_CART } from "./cartConstants";
import { addItemToCartHelper } from "../../Utility/Utility";

var initialState = []
var cartReducer = (state = initialState,actions)=>{
    var {payload,type} = actions;
    switch (type) {
       case ADD_TO_CART:
           return addItemToCartHelper(state,payload.item)
    
        default:
          return state;
    }
}
export default cartReducer