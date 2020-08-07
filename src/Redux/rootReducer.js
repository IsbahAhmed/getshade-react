import userReducer from "./userReducer/userReducer";
import {combineReducers} from 'redux';
import cartReducer from "./cartReducer/cartReducer"
import productReducer from "./productsReducer/productsReducer";
import catagoriesReducer from "./catagoriesReducer/catagoriesReducer";
import ordersReducer from "./orders/ordersReducer";
import reviewReducer from "./reviews/reviewReducer";
import wishlistReducer from "./wishlist/wishlistReducer";

var rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   products:productReducer,
   catagories:catagoriesReducer
   ,orders:ordersReducer,
   reviews: reviewReducer,
   wishlist: wishlistReducer
})

export default rootReducer