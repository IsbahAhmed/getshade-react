import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./ReviewStars.css"
import { useEffect } from 'react'
import { useState } from 'react'
import {v4 as uuid} from "uuid";
const ReviewStars = ({numberOfStars=1,style}) => {
 
    const [array,setArray] = useState([])
    useEffect(()=>{
        var temp = []
        for (let i = 0; i < numberOfStars; i++) {
         
         temp.push("")   
        }
        setArray(temp)
    },[numberOfStars])
    console.log(array)
    return (
        <div className="review-stars" style={{...style}}>
        {   
        array.map((ele)=>
        <FontAwesomeIcon key={uuid()} icon={faStar} style={{color:"var(--yellow)"}}/>)
        }
        </div>
    )
}

export default ReviewStars
