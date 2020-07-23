import React from "react";
import StyledInput from "../StyledInput/StyledInput";
import Button from "../Button/Button";
import "./SingleInputForm.css";
import Paragraph from "../Paragraph/Paragraph";
import { connect } from "react-redux";
import { resetPassword } from "../../Redux/userReducer/userActions";
import { useState } from "react";

const SingleInputForm = ({ setForgetPassword , resetPassword}) => {
  const [email, setEmail] = useState();
  const [status,setStatus] = useState({})
  var handleSubmit = async (e)=>{
    e.preventDefault();
    if(email){
     var status_msg = await resetPassword(email)
    if(status_msg === "success"){
      setStatus({msg:"Email is sent to your provided email address"})
    }
    else {
      setStatus({error:status_msg})
    }
    }
  
  }
  return (
    <div className="single-input-container">
      <form className="single-form" onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          outlineColor="black"
          bottomLineColor="var(--lightblue)"
          type="email"
          required
        />
        {
         status.msg ? <Paragraph style={{color:"var(--green)"}}>{status.msg}</Paragraph>
         :
         status.error ? <Paragraph style={{color:"var(--red)"}}>{status.error}</Paragraph>
         :
         ""
        }
        <div className="sign-in-btn">
          <Button
            value="SUBMIT"
            style={{ letterSpacing: "2px", width: "20rem", height: "4rem" }}
            colorScheme="black"
          />
          <div className="forget-link">
            <Paragraph
              onClick={() => setForgetPassword(false)}
              style={{ marginLeft: "1rem" }}
            >
              Cancel
            </Paragraph>
          </div>
        </div>
      </form>
    </div>
  );
};
var actions = {
  resetPassword,
};
export default connect(null, actions)(SingleInputForm);
