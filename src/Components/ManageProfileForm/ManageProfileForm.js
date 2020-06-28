import React from 'react'
import "./ManageProfileForm.css"
import SimpleInput from '../SiimpleInput/SimpleInput'
import Button from '../Button/Button'
const ManageProfileForm = () => {
    return (
        <form action="">
              <div className="manage-profile-form-container">
              <div style={{gridColumn:"1 / span 2"}}>
           <SimpleInput required label="FIRST NAME" placeholder="First name" />
           </div>
           <div className="" style={{gridColumn:"3 / span 4"}}>
           <SimpleInput required label="LAST NAME" placeholder="Last name"/>
           </div>
           <div className="" style={{gridColumn:"1 / span 2"}}>
           <SimpleInput  label="ADDRESS" placeholder="Address"/>
           </div>
           <div  >
           <SimpleInput label="STREET" placeholder="Street"/>
           </div>
           <div  >
           <SimpleInput  label="ZIP" placeholder="Zip"/>
           </div>
           <div style={{gridColumn:"1 / span 2"}}>
           <SimpleInput required label="PHONE" placeholder="Phone"/>
           </div>
           <div className="" style={{gridColumn:"3 / span 4"}}>
           <SimpleInput required label="EMAIL" type="email" placeholder="Email"/>
           </div>
           <div className="" style={{gridColumn:"4 / 4"}}>
               <Button value="SAVE" style={{width:"100%",height:"5rem"}} colorScheme="black"/>
           </div>
     </div>
             
        </form>
      
    )
}

export default ManageProfileForm
