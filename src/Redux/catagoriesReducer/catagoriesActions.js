import { firestore } from "../../Firebase/firebase";
import { SET_CATAGORIES } from "./catagoriesConstants";

export var fetchCatagories = ()=>async (dispatch)=>{
    var catagories = [];
    var catagorySnap = await firestore.collection('catagories').get();
    catagorySnap.forEach((doc)=>{
        catagories.push({...doc.data(),catId:doc.id});
      
    })
  dispatch({
      type:SET_CATAGORIES,
      payload:{
        catagories
      }
  })
}