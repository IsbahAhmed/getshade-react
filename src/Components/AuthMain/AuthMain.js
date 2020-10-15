import React, { useState } from "react";
import Heading from "../Heading/Heading";
import FormContainer from "../FormContainer/FormContainer";
import ForgetPasswordForm from "../../Components/ForgetPasswordForm/ForgetPassword";
import "./AuthMain.css";
const AuthMain = () => {
  var [forgetPasswordToggle, setResetForm] = useState(false);
 const  setForgetPassword = (value)=>{
   setResetForm(value);
   if(value){
     var x = document.querySelector(".forget-password-form");
      x.scrollIntoView()
   }
 }
  return (
    <React.Fragment>
      <div className="ac-xyz">
        <Heading >
          ACCOUNT
        </Heading>
      </div>
      <FormContainer
        forgetPasswordToggle={forgetPasswordToggle}
        setForgetPassword={setForgetPassword}
      />
      <div className="forget-password-container flex-center">
        <ForgetPasswordForm
          forgetPasswordToggle={forgetPasswordToggle}
          setForgetPassword={setForgetPassword}
        />
      </div>
    </React.Fragment>
  );
};

export default AuthMain;
