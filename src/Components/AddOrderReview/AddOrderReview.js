import React, { useState } from 'react'
import "./AddOrderReview.css"

import Heading from '../Heading/Heading'

import AddReviewModal from '../AddReviewModal/AddReviewModal'
const AddOrderReview = ({orderId,userId}) => {
    const [modal,setModal] = useState(false)

    return (
        <div className="add-review">
          <Heading className="how-was-your-experience" onClick={()=>setModal(true)}>
              How was your experience?
          </Heading>
          <AddReviewModal orderId={orderId} userId={userId} isOpen={modal} setModal={setModal}/>
        </div>
    )
}

export default AddOrderReview
