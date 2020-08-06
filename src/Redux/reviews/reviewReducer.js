import { SET_REVIEWS, ADD_REVIEW } from "./reviewsConstants";

var initialState = [];

var reviewReducer = (state = initialState,actions)=>{
    var {payload,type} = actions;
    switch (type) {
      case  SET_REVIEWS:
          return payload.reviews
    case ADD_REVIEW :
      return [...state,payload.reviewObj]
        default:
            return state;
    }
}
export default reviewReducer;