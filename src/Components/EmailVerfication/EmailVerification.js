import React from 'react'
import Heading from "../Heading/Heading"
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { signout } from '../../Redux/userReducer/userActions'
import "./EmailVerification.css"
import Paragraph from '../Paragraph/Paragraph'
const EmailVerification = ({signout}) => {
    return (
        <div className="email-verification-container">
      <div className="v-main">
      <Heading fontSize="40">
           VERIFY YOUR ACCOUNT
        </Heading>
        <Paragraph>
            We have sent you email on your provided email address. <br/>
            Verify your account and then login. 
        </Paragraph>
        <Paragraph>
            OR
        </Paragraph>
        <Button value="SIGN OUT" onClick={signout} colorScheme="black" style={{width:"15rem",height:"5rem"}}/>

      </div>
        </div>
    )
}
var actions = {
    signout
}
export default connect(null,actions)(EmailVerification)
