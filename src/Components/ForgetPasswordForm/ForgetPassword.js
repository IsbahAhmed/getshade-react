import React from 'react'
import "./ForgetPassword.css"
import Heading from '../Heading/Heading';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from '../Paragraph/Paragraph';
import SingleInputForm from '../SingleInputForm/SingleInputForm';
const ForgetPassword = (props) => {
    var {forgetPasswordToggle,setForgetPassword} = props;
    return (
        <div className={`forget-password-form ${(forgetPasswordToggle && ("forget-password-form-on"))}`}>
            <div className="has">
              <div className="">
              <Heading fontSize="23">
                Reset Password
                </Heading>
                <Paragraph style={{marginTop:"5px"}}>
            We will send you an email to reset your password
            </Paragraph>
              </div>
                <div className="close-forget-form" onClick={()=> setForgetPassword(false)}>
                   <FontAwesomeIcon icon={faTimes}/>
                    CLOSE
                   </div>
            </div>
            <div className="forget-area">
            <SingleInputForm setForgetPassword={setForgetPassword}/>
            </div>
        </div>
    )
}

export default ForgetPassword
