import { firestore } from "../../Firebase/firebase"
import { SET_REVIEWS, ADD_REVIEW } from "./reviewsConstants";

export var addReview = (reviewObj) => async (dispatch)=>{
  
    try {
        await firestore.collection('reviews').add(reviewObj);
        dispatch({
            type: ADD_REVIEW,
            payload:{
                reviewObj
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

export var fetchReviewsForSpecificUser = (userId) => async (dispatch)=>{
    try {
        var reviews = [];
        var reviewSnap = await firestore.collection('reviews').where("reviwedBy","==",userId).get();
        reviewSnap.forEach(doc => {
            reviews.push({...doc.data(),reviewId:doc.id})
        });

        dispatch({
            type:SET_REVIEWS,
            payload:{
                reviews
            }
        })
    } catch (error) {
        console.log(error.message)
        
    }
}
