import { auth, serverTimeStamp, firestore } from "../../Firebase/firebase";
import { CREATE_NEW_USER, REMOVE_USER } from "./userConstants";

export var createNewUser = (userObj)=>({
    type: CREATE_NEW_USER,
    payload:{
        userObj
    }
})
export var removeCurrentUser = ()=>{
    return async (dispatch)=>{
        dispatch({
            type : REMOVE_USER
        })
    }
}

export var signin = (userObj)=>{
    return async (dispatch)=>{
    try {
        var {email,password} = userObj;
    var {user} = await auth.signInWithEmailAndPassword(email,password)
    
    
    } catch (error) {
        console.log(error)
    }
    
    }
    }

export var signout = ()=>{
    return async (dispatch)=>{
        await auth.signOut()
    
    }
}
export var signUp = (userObj) => async (dispatch)=>{
    var {firstName,lastName,email,password} = userObj
  
        try {
            var createdUser = await auth.createUserWithEmailAndPassword(email,password)
            console.log(createdUser);
         
     
           //set to database
           var userObjectForFirestore = {
               firstName,lastName,email,
               createdAt: serverTimeStamp()
           }
               
           await firestore.collection('users').doc(createdUser.user.uid).set(userObjectForFirestore);
            //update profile
            await createdUser.user.updateProfile({
                displayName: firstName
            })
     

        //    navigate(userObjforState.uid)
           } catch (error) {
               console.log(error)
           }
   
    
}