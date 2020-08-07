import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SET_WISHLIST } from "./wishlistConstants";

var initialState = [];

var wishlistReducer = (state = initialState, actions)=>{
    var {payload,type} = actions;
    switch (type) {
        
    case ADD_TO_WISHLIST:
        return [...state,payload.wishlistItem]
        case SET_WISHLIST:
            return payload.wishlist

          case REMOVE_FROM_WISHLIST:
              return state.filter(({wishlistItemId})=> payload.wishlistItemId !== wishlistItemId);  
        default:
         return state
    }
}
export default wishlistReducer