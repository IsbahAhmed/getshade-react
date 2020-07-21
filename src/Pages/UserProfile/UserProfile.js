import React from "react";
import "./UserProfile.css";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";


import UserDashboardWrapper from "../../Components/UserDashboardWrapper/UserDashboardWrapper";
import { connect } from "react-redux";
import { signout } from "../../Redux/userReducer/userActions";
const UserProfile = ({signout}) => {
    console.log("CDM")
  return (
    <div className="user-dashboard">
      <div className="user-dashboard-header">
        <Heading fontSize="25" style={{ color: "white" }}>
          isbah ahmed
        </Heading>
        <Button
          value="SIGN OUT"
          style={{ width: "20rem", height: "5rem", color: "black" }}
          colorScheme="white"
          onClick={signout}
        />
      </div>
        <UserDashboardWrapper/>
    </div>
  );
};
var actions = {
  signout
}
export default connect(null,actions)(UserProfile);
