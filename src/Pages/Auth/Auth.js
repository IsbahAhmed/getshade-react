import React from 'react';
import "./Auth.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Paragraph from '../../Components/Paragraph/Paragraph';

import AuthMain from '../../Components/AuthMain/AuthMain';
const Auth = (props) => {
   
    return (
        <div className="auth-page-container">
           <div className="brc">
               <Link to="/">
               Home
               </Link>
               <FontAwesomeIcon icon={faGreaterThan} />
               <Paragraph>
                   Account
               </Paragraph>
           </div>
     <div className="auth-main">
     <AuthMain/>
     </div>
     <div className="sp"></div>
        </div>
    )
}

export default Auth
