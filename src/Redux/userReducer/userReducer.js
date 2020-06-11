import { CREATE_NEW_USER, REMOVE_USER } from "./userConstants";


var initialState = {
    currentUser: null
}
var userReducer = (state = initialState,actions)=>{
    var {payload , type} = actions;
    switch (type) {
        case CREATE_NEW_USER:
            
            return {...state,currentUser:payload.userObj}
    case REMOVE_USER:
        return {...state, currentUser:null}
        default:
            return state
    }
}

export default userReducer