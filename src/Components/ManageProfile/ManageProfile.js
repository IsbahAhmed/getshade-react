import React from 'react'
import "./ManageProfile.css"
import Heading from '../Heading/Heading'
import ManageProfileForm from '../ManageProfileForm/ManageProfileForm'
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm'
const ManageProfile = () => {
    return (
        <div className="manage-profile-container">
           <div className="manage-profile-main">
          <Heading fontSize="30" style={{marginLeft:"1rem"}}>
          Personal Data
          </Heading>
          <ManageProfileForm/>
          <Heading fontSize="30" style={{marginLeft:"1rem"}}>
          Change Password
          </Heading>
          <ChangePasswordForm/>
           </div>
        </div>
    )
}

export default ManageProfile
