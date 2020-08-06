import {
  CREATE_NEW_USER,
  REMOVE_USER,
  UPDATE_CURRENT_USER,
  ADD_ORDER_ID,
  SET_ORDERS,
} from "./userConstants";

var initialState = {
  currentUser: null,
};
var userReducer = (state = initialState, actions) => {
  var { payload, type } = actions;
  switch (type) {
    case CREATE_NEW_USER:
      return { ...state, currentUser: payload.userObj };
    case REMOVE_USER:
      return { ...state, currentUser: null };

    case UPDATE_CURRENT_USER:
      return { ...state, currentUser: payload.userObj };
    case ADD_ORDER_ID:
  var oldOrders = state.currentUser.orders;
   if(oldOrders){
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        orders: [...state.currentUser.orders, payload.orderId],
      },
    };
   }
   else {
    return {
      ...state,
      currentUser: {
        ...state.currentUser,
        orders: [payload.orderId],
      },
    };
   }
  
    default:
      return state;
  }
};

export default userReducer;
