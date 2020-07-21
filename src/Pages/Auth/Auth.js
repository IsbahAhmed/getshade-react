import React from 'react';
import "./Auth.css";
import {Link, Redirect} from "react-router-dom"


import AuthMain from '../../Components/AuthMain/AuthMain';

import { connect } from 'react-redux';


const Auth = (props) => {
   //checking user auth state

  

    return (
        <React.Fragment>
            {
                !props.user ?
                <div className="auth-page-container">
                <div className="brc">
         
              <Link to="/">
                    Home
                    </Link>
                 /
                    <Link to="/auth">
                        Account
                    </Link>
           
                </div>
          <div className="auth-main">
          <AuthMain/>
          </div>
          <div className="sp"></div>
             </div>
             :
             <Redirect to={`/userProfile/${props.user.uid}`}/>
            }
        </React.Fragment>
    )
}
var mapState = (state)=>({
    user:state.user.currentUser
})

export default connect(mapState)(Auth)
