import React from "react";
import StyledInput from "../StyledInput/StyledInput";
import "./SignUpForm.css";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import { useState } from "react";
import { connect } from "react-redux";
import { signUp } from "../../Redux/userReducer/userActions";

const SignUpForm = ({ openSignupForm, signUp }) => {
  const [formValues, setFormValues] = useState({});
  const [error, setErrorMsg] = useState("");
  var handleFormValues = (e) => {
    var { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  var handleSubmit = async (e) => {
    e.preventDefault();
    var { fname, lname, email, password, cnfrm_pass } = formValues;

    if (fname && lname && email && password ) {
      if (password === cnfrm_pass && password.length >= 6) {
        var userObj = {
          firstName: fname,
          lastName: lname,
          email,
          password,
        };
        var status = await signUp(userObj);
        if (status !== "success") {
          setErrorMsg(status);
        }
      }
      else if(password !== cnfrm_pass){
        setErrorMsg("Confirm password!");

      }
      else if(password.length < 6){
        setErrorMsg("Password should be atleast 6 characters long")
      }
    }
  };
  var { fname, lname, email, password, cnfrm_pass } = formValues;

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <StyledInput
        required
        type="text"
        name="fname"
        value={fname}
        outlineColor="var(--black)"
        bottomLineColor="var(--lightblue)"
        placeholder="First name"
        onChange={handleFormValues}
      />
      <StyledInput
        required
        type="text"
        name="lname"
        value={lname}
        outlineColor="var(--black)"
        bottomLineColor="var(--lightblue)"
        placeholder="Last name"
        onChange={handleFormValues}
      />
      <StyledInput
        required
        name="email"
        type="email"
        value={email}
        outlineColor="var(--black)"
        bottomLineColor="var(--lightblue)"
        placeholder="Email"
        onChange={handleFormValues}
      />
      <StyledInput
        required
        name="password"
        value={password}
        type="password"
        outlineColor="var(--black)"
        bottomLineColor="var(--lightblue)"
        placeholder="Password"
        onChange={handleFormValues}
      />
      <StyledInput
        required
        name="cnfrm_pass"
        value={cnfrm_pass}
        type="password"
        outlineColor="var(--black)"
        bottomLineColor={
          password === cnfrm_pass ? "var(--lightblue)" : "var(--red)"
        }
        placeholder="Confirm password"
        onChange={handleFormValues}
      />
      {error ? <Paragraph style={{ color: "var(--red)" }}>{error}</Paragraph>:""}
      <div className="sign-in-btn">
        <Button
          value="REGISTER"
          style={{ letterSpacing: "2px", width: "25rem", height: "5rem" }}
          colorScheme="black"
        />
        <div className="forget-link">
          <Paragraph
            style={{ marginLeft: "2rem" }}
            onClick={() => openSignupForm(false)}
          >
            Cancel
          </Paragraph>
        </div>
      </div>
    </form>
  );
};
var actions = {
  signUp,
};
export default connect(null, actions)(SignUpForm);
