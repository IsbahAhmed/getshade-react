import React from "react";
import "./UserProfile.css";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";


import UserDashboardWrapper from "../../Components/UserDashboardWrapper/UserDashboardWrapper";
const UserProfile = () => {
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
        />
      </div>
        <UserDashboardWrapper/>
    </div>
  );
};

export default UserProfile;
