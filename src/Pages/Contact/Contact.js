import React from 'react'
import "./Contact.css"
import SimpleInput from '../../Components/SiimpleInput/SimpleInput'
import TextArea from '../../Components/TextArea/TextArea'
import Button from '../../Components/Button/Button'
import Heading from '../../Components/Heading/Heading'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMapMarker, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '../../Components/Paragraph/Paragraph'
const Contact = () => {
    return (
        <div className="contact-page-container">
           <form className="contact-main">
               <div className="contact-form">
                <SimpleInput placeholder="Full name" label="" required/>
                <SimpleInput type="email" placeholder="Email" label="" required/>
                <SimpleInput type="file" label="Optional"/>
               </div>
               <div className="message-box">
                   <TextArea height="80%" required placeholder="Message"/>
                   <Button value="SUBMIT" style={{width:"15rem",height:"5rem",marginTop:"2rem",float:"right"}} colorScheme="black"/>
               </div>
               <div className="store-address">
                   <Heading style={{marginTop:"5rem"}}>
                       STORE INFORMATION
                       </Heading>
                    <Paragraph fontSize="18">
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight:"1rem"}}/> At Glass Mall , United States
                 
                    </Paragraph>
                    <Paragraph fontSize="18">
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight:"1rem"}}/> Email Us @ 
                        abc@gmail.com 
                    </Paragraph>
               </div>
           </form>
        </div>
    )
}

export default Contact
