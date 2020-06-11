import userReducer from "./userReducer/userReducer";
import {combineReducers} from 'redux';
import cartReducer from "./cartReducer/cartReducer"

var rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer
   
})

export default rootReducer