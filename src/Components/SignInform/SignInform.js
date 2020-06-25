import React from 'react'
import "./SignInform.css"
import StyledInput from '../StyledInput/StyledInput'
import Button from '../Button/Button'
import Paragraph from '../Paragraph/Paragraph'
const SignInform = (props) => {
    var {setForgetPassword,...restProps} = props
    return (
       <form action="" className="signin-form" {...restProps}>
           <StyledInput bottomLineColor="var(--lightblue)" outlineColor="var(--lightblack)" placeholder="Email"/>
           <StyledInput bottomLineColor="var(--lightblue)" outlineColor="var(--lightblack)" placeholder="Password"/>
          <div className="sign-in-btn">
          <Button value="SIGN IN" style={{letterSpacing:"2px",width:"25rem",height:"5rem"}} colorScheme="black"/>
            <div className="forget-link">
            <Paragraph onClick={() => setForgetPassword(true)} style={{marginLeft:"1rem"}}>
          Forgot your password?
          </Paragraph>
            </div>
          </div>
       </form>
    )
}

export default SignInform
