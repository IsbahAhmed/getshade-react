import React, { useState, useEffect } from 'react';
import "./Auth.css";
import {Link, Redirect, useHistory} from "react-router-dom"


import AuthMain from '../../Components/AuthMain/AuthMain';

import { connect } from 'react-redux';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';


const Auth = (props) => {
var history = useHistory();
useEffect(()=>{
if(props.user){
  history.goBack()
}
},[props.user])

   //checking user auth state
const [spinner,setSpinner] = useState(true)
  var spinnerOf_timeout = ()=> setTimeout(()=>{
    setSpinner(false)
  },3000)
  useEffect(()=>{
    spinnerOf_timeout()
    return ()=>{
        clearTimeout(spinnerOf_timeout)
    }
  },[])
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
        {(spinner) && <LoadingSpinner/>}
          <AuthMain/>
          </div>
          <div className="sp"></div>
             </div>
             :
            ""
            }
        </React.Fragment>
    )
}
var mapState = (state)=>({
    user:state.user.currentUser
})

export default connect(mapState)(Auth)
