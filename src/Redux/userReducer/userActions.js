import { auth, serverTimeStamp, firestore } from "../../Firebase/firebase";
import { CREATE_NEW_USER, REMOVE_USER, UPDATE_CURRENT_USER, SET_CURRENT_USER } from "./userConstants";

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
    return true;
    
    } catch (error) {
        console.log(error)
        return false
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
            var user = auth.currentUser;
             await user.sendEmailVerification()
          
            return "success"
        //    navigate(userObjforState.uid)
           } catch (error) {
               console.log(error)
               if(error.code === "auth/email-already-in-use"){
                return "Email already in use"
               }
               else{
                   return "Error occured!"
               }
           }
   
    
}
export var updateProfileInfo = (userObj,uid) => async (dispatch)=>{
      
        try {
           await firestore.collection('users').doc(uid).update(userObj)
           var user =  auth.currentUser;
   
            await user.updateProfile({
                displayName: userObj.firstName
            })
          if(userObj.email){
            await user.updateEmail(userObj.email)
           
          }
     
            dispatch({
                type:UPDATE_CURRENT_USER,
                payload:{
                    userObj:{...userObj,uid}
                }
            })
            return "success"

        } catch (error) {
            console.log(error)
            return "An error occured please login again and then retry"
        }
}
export var updatePassword = (newPassword) => async (dispatch)=>{
    try{
        var user =  auth.currentUser;
       await user.updatePassword(newPassword)
       return "success"
    }
    catch(error){
        console.log(error.message)
        return "An error ocured please login again and then retry!"
    }
} 

export var addNewAddress = (userObj,uid) => async (dispatch) =>{
    try {
       await firestore.collection('users').doc(uid).set(userObj)
       dispatch({
           type:UPDATE_CURRENT_USER,
           payload:{
               userObj
           }
       })
       return "success"
    } catch (error) {
        console.log(error.message)
        return "An error ocured please try again!"
    }
}

export var deleteAddress = (userObj)=>async (dispatch)=>{
    try {
        await firestore.collection('users').doc(userObj.uid).set(userObj)
        dispatch({
            type:UPDATE_CURRENT_USER,
            payload:{
                userObj
            }
        })
        return "success"
     } catch (error) {
         console.log(error.message)
         return "An error ocured please try again!"
     }
}

export var resetPassword = (email)=> async ()=>{
    try {
        await auth.sendPasswordResetEmail(email);
        return "success"
    } catch (error) {
        console.log(error)
        return "An error occured"
    }
}