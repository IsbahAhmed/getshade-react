import React from 'react'
import "./Review.css"
import ReviewStars from "../ReviewStars/ReviewStars"
import Heading from '../Heading/Heading'
const Review = ({review}) => {
 console.log(review.stars)
    return (
    
        <div className="">
              { (review.feedBack) &&  (
              <>
              <ReviewStars style={{justifyContent:"flex-end",marginBottom:"1rem"}} 
              numberOfStars={review.stars}/>
              <Heading style={{textAlign:"end"}}>
                  {review.feedBack}
              </Heading>
              </>
          )}
        </div>
   
    )
}

export default Review
