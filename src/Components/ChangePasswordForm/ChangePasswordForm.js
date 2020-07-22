import React, { useState } from 'react'
import "./ChangePasswordForm.css"
import SimpleInput from '../SiimpleInput/SimpleInput'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { updatePassword } from '../../Redux/userReducer/userActions'
import Paragraph from "../Paragraph/Paragraph"

const ChangePasswordForm = (props) => {

  var {user:{uid},updatePassword} = props;

  const [formValues, setFormValues] = useState({
 
 });
 const [errorText,setErrorText] = useState("")
 const [msg,setMsg] = useState("")

 var handleFormValues = (e) => {
  var { name, value } = e.target;
  setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};

var handleSubmit =async (e)=>{
  e.preventDefault();
  var {new_pass,cnfrm_pass} = formValues
  if(new_pass.length >= 6 && new_pass === cnfrm_pass){
    var flag = await updatePassword(new_pass)
    if(flag === "success"){
      setErrorText("")
      setMsg("Updated Successfully")
    }
    else{
      setMsg("")
      setErrorText(flag)

    }
  }
  else if(new_pass !== cnfrm_pass){
    setMsg("")
    setErrorText("Confirm password!");

  }
  else{
    setMsg("")

    setErrorText("Password length should be atleast 6 characters");
  }
}
 var {new_pass,cnfrm_pass} = formValues
    return (
      <form onSubmit={handleSubmit}>
            <div className="change-password-form-container">
          
            <div >
              <SimpleInput required
                   name="new_pass"
                   value={new_pass}
                   onChange={handleFormValues}
              type="password" label="NEW PASSWORD" placeholder="Password"/>
            </div>
            <div >
              <SimpleInput required 
                   name="cnfrm_pass"
                   value={cnfrm_pass}
                   onChange={handleFormValues}
                   style={new_pass !== cnfrm_pass ? {borderColor:"var(--red)"}:""}
              type="password" label="RETYPE NEW PASSWORD" placeholder="Password"/>
            </div>
                {
                (errorText && !msg) && 
            <div style={{gridColumn:"1/ span 2"}}>
              <Paragraph style={{color:'var(--red)'}}>
               {errorText}
              </Paragraph>
            </div>
}
            <div style={{gridColumn:"1/ span 2"}}>
              <Paragraph style={{color:'var(--green)'}}>
                {
                  (msg && !errorText) && msg
                }
              </Paragraph>
            </div>
            <div className="">
              <Button style={{width:"50%",height:"5rem"}} value="SAVE" colorScheme="black"/>
            </div>
            </div>
      </form>
    )
}
var mapState = (state)=>({
  user:state.user.currentUser
  })
  var actions = {
  updatePassword
  }
export default connect(mapState,actions)(ChangePasswordForm)
