import userReducer from "./userReducer/userReducer";
import {combineReducers} from 'redux';
import cartReducer from "./cartReducer/cartReducer"
import productReducer from "./productsReducer/productsReducer";
import catagoriesReducer from "./catagoriesReducer/catagoriesReducer";

var rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   products:productReducer,
   catagories:catagoriesReducer
   
})

export default rootReducer