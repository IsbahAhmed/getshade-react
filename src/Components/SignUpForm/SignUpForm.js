import React from 'react'
import StyledInput from '../StyledInput/StyledInput'
import "./SignUpForm.css"
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
const SignUpForm = ({openSignupForm}) => {
    return (
  <form action="" className="signup-form">
        <StyledInput type="text" outlineColor="var(--black)" bottomLineColor="var(--lightblue)" placeholder="First name"/>
        <StyledInput type="text" outlineColor="var(--black)" bottomLineColor="var(--lightblue)" placeholder="Last name"/>
        <StyledInput type="email" outlineColor="var(--black)" bottomLineColor="var(--lightblue)" placeholder="Email"/>
        <StyledInput type="password" outlineColor="var(--black)" bottomLineColor="var(--lightblue)" placeholder="Password"/>
        <StyledInput type="password" outlineColor="var(--black)" bottomLineColor="var(--lightblue)" placeholder="Confirm password"/>
       <div className="sign-in-btn">
       <Button value="REGISTER" style={{letterSpacing:"2px",width:"25rem",height:"5rem"}} colorScheme="black"/>
       <div className="forget-link">
           <Paragraph style={{marginLeft:"2rem"}} onClick={()=> openSignupForm(false)}>
               Cancel
           </Paragraph>
       </div>
       </div>
       
  </form>
    )
}

export default SignUpForm
