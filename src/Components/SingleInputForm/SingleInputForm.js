import React from 'react'
import StyledInput from '../StyledInput/StyledInput'
import Button from '../Button/Button'
import "./SingleInputForm.css"
import Paragraph from '../Paragraph/Paragraph'

const SingleInputForm = ({setForgetPassword}) => {
    return (
        <div className="single-input-container">
            <form className="single-form">
                <StyledInput placeholder="Enter Email" outlineColor="black" bottomLineColor="var(--lightblue)"/>
                <div className="sign-in-btn">
          <Button value="SUBMIT" style={{letterSpacing:"2px",width:"20rem",height:"4rem"}} colorScheme="black"/>
            <div className="forget-link">
            <Paragraph onClick={()=> setForgetPassword(false)} style={{marginLeft:"1rem"}}>
         Cancel
          </Paragraph>
            </div>
          </div>
            </form>
        </div>
    )
}

export default SingleInputForm
