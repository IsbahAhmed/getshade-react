import { SET_CATAGORIES } from "./catagoriesConstants";

var inititialState = []

const catagoriesReducer = (state = inititialState,actions) => {
    var {payload,type }= actions;
    switch (type) {
    
    case SET_CATAGORIES:
        return [...payload.catagories]
        default:
            return state
    }
}

export default catagoriesReducer
