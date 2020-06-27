import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashNav from '../DashNav/DashNav';
import Paragraph from "../../Components/Paragraph/Paragraph";
import Orders from "../../Components/Orders/Orders";
import ManageProfile from "../../Components/ManageProfile/ManageProfile";
import Addresses from "../../Components/Addresses/Addresses";
import Payments from "../../Components/Payments/Payments";
import Wishlist from "../../Components/Wishlist/Wishlist";
import "./UserDashboardWrapper.css"
const UserDashboardWrapper = () => {
    return (
        <div className="u-dash-main">
        <DashNav/>
            <div className="dash-pages">
            <Switch>
            <Route path="/userProfile/:uid/orders" component={Orders} exact/>
            <Route path="/userProfile/:uid/" component={ManageProfile} />
            <Route path="/userProfile/:uid/addresses" component={Addresses} exact/>
            <Route path="/userProfile/:uid/payments" component={Payments} exact/>
            <Route path="/userProfile/:uid/wishlist" component={Wishlist} exact/>
            
            </Switch>
            </div>
          </div>
    )
}

export default UserDashboardWrapper
