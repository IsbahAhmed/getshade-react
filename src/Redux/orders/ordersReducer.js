import { SET_ORDERS, UPDATE_ORDERS } from "./ordersConstants";

var initialState = [];
var ordersReducer = (state = initialState,actions) =>{
    var {type,payload} = actions;
    switch (type) {
case SET_ORDERS:
    return payload.orders
case UPDATE_ORDERS:
    var filteredOrders = state.filter(({orderId})=> orderId !== payload.orderObj.orderId);
    return [...filteredOrders,payload.orderObj]
        default:
            return state
    }
}
export default ordersReducer;