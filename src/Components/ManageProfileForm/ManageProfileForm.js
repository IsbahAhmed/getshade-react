import React, { useState } from 'react'
import "./ManageProfileForm.css"
import SimpleInput from '../SiimpleInput/SimpleInput'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import { updateProfileInfo } from '../../Redux/userReducer/userActions'
import Paragraph from '../Paragraph/Paragraph'

const ManageProfileForm = (props) => {
    var {user:{firstName,lastName,email,uid},updateProfileInfo} = props;
    const [formValues, setFormValues] = useState({
       ...props.user
    });
    const [msgText,setMsgText] = useState({
        msg:"",error:""
    })
    var handleFormValues = (e) => {
      var { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
    var handleSubmit = async (e)=>{
      e.preventDefault();
      var {firstName,lastName,email,address,street,zip,phone} = formValues;
      if(email && firstName && lastName && phone){
          var userObj = {
            firstName,lastName,email,address,street,zip,phone
        }

       var status = await updateProfileInfo(userObj,uid)
       if(status === "success"){
        setMsgText({msg:"Updated successfully"})
       }
       else {
        setMsgText({error:status})

       }
          }
      else{
        setMsgText({error:"Please enter valid information!"})
      }
    }
    var {firstName,lastName,email,address,street,zip,phone} = formValues;
    return (
        <form onSubmit={handleSubmit}>
              <div className="manage-profile-form-container">
              <div style={{gridColumn:"1 / span 2"}}>
           <SimpleInput 
           required 
           
           label="FIRST NAME" placeholder="First name" name="firstName" value={firstName}
           onChange={handleFormValues}
           />
           </div>
           <div className="" style={{gridColumn:"3 / span 4"}}>
           <SimpleInput required label="LAST NAME" placeholder="Last name"
           name="lastName"
           value={lastName}   onChange={handleFormValues}
           />
           </div>
           <div className="" style={{gridColumn:"1 / span 2"}}>
           <SimpleInput  label="ADDRESS" placeholder="Address"
           name="address"
           value={address}
           onChange={handleFormValues}
           />
           </div>
           <div  >
           <SimpleInput label="STREET"
           name="street"
           value={street}
                 onChange={handleFormValues}
           placeholder="Street"/>
           </div>
           <div  >
           <SimpleInput  label="ZIP"
           name="zip"
           value={zip}
           onChange={handleFormValues}
           placeholder="Zip"/>
           </div>
           <div style={{gridColumn:"1 / span 2"}}>
           <SimpleInput required label="PHONE" 
           name="phone"
           value={phone}
           onChange={handleFormValues}
           type="phone"
           placeholder="Phone"/>
           </div>
           <div className="" style={{gridColumn:"3 / span 4"}}>
           <SimpleInput required label="EMAIL" type="email"
           name="email"
           type="email"
           value={email}
           onChange={handleFormValues}
           placeholder="Email"/>
           </div>
            {
                (msgText.msg) &&
            <Paragraph style={{gridColumn:"1 / span 4",color:"var(--green)"}}>{msgText.msg}</Paragraph>
            }
               {
                (msgText.error) &&
            <Paragraph style={{gridColumn:"1 / span 4",color:"var(--red)"}}>{msgText.error}</Paragraph>
            }
           <div className="" style={{gridColumn:"4 / 4"}}>
               <Button value="SAVE" style={{width:"100%",height:"5rem"}} colorScheme="black"/>
           </div>
     </div>
             
        </form>
      
    )
}
var mapState = (state)=>({
user:state.user.currentUser
})
var actions = {
updateProfileInfo
}
export default connect(mapState,actions)(ManageProfileForm)
