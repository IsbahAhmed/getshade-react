import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import DashNav from '../DashNav/DashNav';
import Paragraph from "../../Components/Paragraph/Paragraph";
import Orders from "../../Components/Orders/Orders";
import ManageProfile from "../../Components/ManageProfile/ManageProfile";
import Addresses from "../../Components/Addresses/Addresses";
import Payments from "../../Components/Payments/Payments";
import Wishlist from "../../Components/Wishlist/Wishlist";
import "./UserDashboardWrapper.css"
import { connect } from 'react-redux';
const UserDashboardWrapper = (props) => {
    var {match:{params:{uid}}} = props;
    return (
      <React.Fragment>
          {
              props.user && uid === props.user.uid ? 
                <div className="u-dash-main">
              <DashNav uid={props.user.uid}/>
                  <div className="dash-pages">
                  <Switch>
                  <Route path="/userProfile/:uid/" component={ManageProfile} exact/>
                  <Route path="/userProfile/:uid/orders" component={Orders} exact/>
                  <Route path="/userProfile/:uid/addresses" component={Addresses} exact/>
      
                  <Route path="/userProfile/:uid/wishlist" component={Wishlist} exact/>
                  
                  </Switch>
                  </div>
                </div>
                :
               <Redirect to="/auth"/> 
          }
      </React.Fragment>
    )
}
var mapState = (state)=>({
    user:state.user.currentUser
})
export default connect(mapState)(withRouter(UserDashboardWrapper))
