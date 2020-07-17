import { SET_PRODUCTS } from "./productConstants";

var initialState = [];

var productReducer = (state = initialState,actions)=>{
var {payload,type} = actions;
switch (type) {
case SET_PRODUCTS:
    return [...payload.products]

    default:
        return state
}
}
export default productReducer;