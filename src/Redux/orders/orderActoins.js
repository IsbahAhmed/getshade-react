import { firestore } from "../../Firebase/firebase";
import { SET_ORDERS, UPDATE_ORDERS } from "./ordersConstants";

export var placeNewOrder = (orderObj) => async (dispatch) => {
  try {
    var createdOrder = await firestore.collection("orders").add(orderObj);
    return createdOrder.id;
  } catch (error) {
    console.log(error);
    return "error";
  }
};
export var fetchOrdersForSpecificUser = (userId) => async (dispatch) => {
  var orders = [];
  try {
    var orderSnap = await firestore
    .collection("orders")
    .where("orderedBy", "==", userId)
    .get();
    orderSnap.forEach((doc)=>{
        orders.push({...doc.data(),orderId:doc.id})
    })
   dispatch({
       type: SET_ORDERS,
       payload:{
           orders
       }
   })
  } catch (error) {
    console.log(error.message)
  }
};

export var cancelOrder = (orderObj) => async(dispatch)=>{
  try {
    await firestore.collection('orders').doc(orderObj.orderId).update(orderObj)
    dispatch({
      type:UPDATE_ORDERS,
     payload:{
      orderObj
     }
    })
  } catch (error) {
    console.log(error.message)
  }
}
