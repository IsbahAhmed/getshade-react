import React, { useState } from "react";
import "./SignInform.css";
import StyledInput from "../StyledInput/StyledInput";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import { connect } from "react-redux";
import { signin } from "../../Redux/userReducer/userActions";

const SignInform = (props) => {
  var { setForgetPassword,signin, ...restProps } = props;
  const [formValues, setFormValues] = useState({});
  const [statusMsg,setStatusMsg]=useState({});
  
  var handleFormValues =  (e) => {
    var { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  var handleSubmit = async (e)=>{
    e.preventDefault();
    var {email,password} = formValues;
    if(email && password){
        var userObj = {
          email,password
        }
         var status = await signin(userObj);
        if(!status){
          setStatusMsg({error:"Invalid email or password"})
        }
        }
    
  }
  var {email,password} = formValues;
  return (
    <form className="signin-form" onSubmit={handleSubmit} {...restProps} >
      <StyledInput
        bottomLineColor="var(--lightblue)"
        outlineColor="var(--lightblack)"
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        required
        onChange={handleFormValues}

      />
      <StyledInput

        bottomLineColor="var(--lightblue)"
        outlineColor="var(--lightblack)"
        placeholder="Password"
        name="password"
        type="password"
      value={password}  
      required
      onChange={handleFormValues}
      />
      
      {
        (statusMsg.error) &&
      <Paragraph style={{color:'var(--red)'}}>{statusMsg.error}</Paragraph>}
      <div className="sign-in-btn">
        <Button
          value="SIGN IN"
          style={{ letterSpacing: "2px", width: "25rem", height: "5rem" }}
          colorScheme="black"

        />
        <div className="forget-link">
          <Paragraph
            onClick={() => setForgetPassword(true)}
            style={{ marginLeft: "1rem" }}
          >
            Forgot your password?
          </Paragraph>
        </div>
      </div>
    </form>
  );
};
var actions = {
  signin
}
export default connect(null,actions)(SignInform);
