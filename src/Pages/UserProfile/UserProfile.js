import React, { useEffect } from "react";
import "./UserProfile.css";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Button/Button";

import UserDashboardWrapper from "../../Components/UserDashboardWrapper/UserDashboardWrapper";
import { connect } from "react-redux";
import { signout } from "../../Redux/userReducer/userActions";
import { Redirect } from "react-router-dom";
import EmailVerification from "../../Components/EmailVerfication/EmailVerification";
import { fetchOrdersForSpecificUser } from "../../Redux/orders/orderActoins";
import { fetchReviewsForSpecificUser } from "../../Redux/reviews/reviewActions";
const UserProfile = ({
  signout,
  user,
  match: {
    params: { uid },
  },
  fetchOrdersForSpecificUser,
  fetchReviewsForSpecificUser,
}) => {
  useEffect(() => {
    if (user) {
      fetchOrdersForSpecificUser(user.uid);
      fetchReviewsForSpecificUser(user.uid);
    }
  }, [user]);
  return (
    <React.Fragment>
      {user && uid === user.uid && user.emailVerified ? (
        <div className="user-dashboard">
          <div className="user-dashboard-header">
            <Heading fontSize="25" style={{ color: "white" }}>
              {user.firstName + " " + user.lastName}
            </Heading>
            <Button
              value="SIGN OUT"
              style={{ width: "20rem", height: "5rem", color: "black" }}
              colorScheme="white"
              onClick={signout}
            />
          </div>
          <UserDashboardWrapper uid={uid} />
        </div>
      ) : user && uid === user.uid && !user.emailVerified ? (
        <EmailVerification />
      ) : (
        <Redirect to="/auth" />
      )}
    </React.Fragment>
  );
};
var mapState = (state) => ({
  user: state.user.currentUser,
});
var actions = {
  signout,
  fetchOrdersForSpecificUser,
  fetchReviewsForSpecificUser,
};
export default connect(mapState, actions)(UserProfile);
