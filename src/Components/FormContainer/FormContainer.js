import React from 'react'
import "./FormContainer.css"
import Heading from '../Heading/Heading'
import List from '../List/List'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from '../Paragraph/Paragraph'
import { useState } from 'react'
import SignInform from '../SignInform/SignInform'
import SignUpForm from '../SignUpForm/SignUpForm'

const FormContainer = (props) => {
    var {forgetPasswordToggle,setForgetPassword} = props;
    var [signupFormOpen,openSignupForm] = useState("0")
        
     
    return (
        <div className="form-container" >
            <div className="side-box box">

                <Heading fontSize="27" >
                    New here?
                </Heading>
                <Heading>
                Registration is free and easy!
                </Heading>

                <List list_items={["Faster checkout",
                "Save multiple shipping addresses",
                "View and track orders and more"]} iconColor="var(--lightblack)"
                 listIcon={faCheck}/>

                <Button
                 onClick={()=> openSignupForm("1")}
                 value="CREATE AN ACCOUNT"
                  style={{width:"25rem",height:"5rem"}} 
                  colorScheme="black"
                  />
            </div>

            <div className="signin-form-box box">
            <div className="signin-form-container ">
                <Heading fontSize="27">
                Already registered?
                </Heading>
            <SignInform setForgetPassword={setForgetPassword}/>
            </div>
              
            </div>
            <div className={`signup-form-container ${signupFormOpen === "1" ? "signup-form-toggled":""}`}>
                <div className="yap">

                    <Heading fontSize="23">
                    Create an account
                    </Heading>

                   <div className="close-form" onClick={() => openSignupForm("0")}>
                   <FontAwesomeIcon icon={faTimes}/>
                    CLOSE
                   </div>
                </div>
                <div className="signupFormArea">
                    <SignUpForm openSignupForm={openSignupForm}/>
                </div>
            </div>
        </div>
    )
}

export default FormContainer
