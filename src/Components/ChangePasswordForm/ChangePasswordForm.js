import React from 'react'
import "./ChangePasswordForm.css"
import SimpleInput from '../SiimpleInput/SimpleInput'
import Button from '../Button/Button'

const ChangePasswordForm = () => {
    return (
      <form action="">
            <div className="change-password-form-container">
            <div style={{gridColumn:"1/ span 2"}}>
                <SimpleInput required type="password" label="OLD PASSWORD" placeholder="Old password" />
            </div>
            <div >
              <SimpleInput required type="password" label="NEW PASSWORD" placeholder="Password"/>
            </div>
            <div >
              <SimpleInput required type="password" label="RETYPE NEW PASSWORD" placeholder="Password"/>
            </div>
            <div className="">
              <Button style={{width:"50%",height:"5rem"}} value="SAVE" colorScheme="black"/>
            </div>
            </div>
      </form>
    )
}

export default ChangePasswordForm
