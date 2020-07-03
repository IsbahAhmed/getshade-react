import React, { useState } from "react";
import Heading from "../Heading/Heading";
import FormContainer from "../FormContainer/FormContainer";
import ForgetPasswordForm from "../../Components/ForgetPasswordForm/ForgetPassword";
import "./AuthMain.css";
const AuthMain = () => {
  var [forgetPasswordToggle, setForgetPassword] = useState(false);
  return (
    <React.Fragment>
      <div className="">
        <Heading style={{ letterSpacing: "2px", marginTop: "4%" }}>
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
