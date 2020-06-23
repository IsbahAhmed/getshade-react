import React from 'react';
import "./Auth.css";
import {Link} from "react-router-dom"

const Auth = (props) => {
    return (
        <div className="auth-page-container">
           <div className="brc">
               <Link to="/">
               HOME
               </Link>
               
           </div>
           <div className="auth-main"></div>
        </div>
    )
}

export default Auth
