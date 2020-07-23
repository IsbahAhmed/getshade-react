import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashNav from '../DashNav/DashNav';

import Orders from "../../Components/Orders/Orders";
import ManageProfile from "../../Components/ManageProfile/ManageProfile";
import Addresses from "../../Components/Addresses/Addresses";

import Wishlist from "../../Components/Wishlist/Wishlist";
import "./UserDashboardWrapper.css"

const UserDashboardWrapper = ({uid}) => {

    return (
      <React.Fragment>
          
           
                <div className="u-dash-main">
              <DashNav uid={uid}/>
                  <div className="dash-pages">
                  <Switch>
                  <Route path="/userProfile/:uid/" component={ManageProfile} exact/>
                  <Route path="/userProfile/:uid/orders" component={Orders} exact/>
                  <Route path="/userProfile/:uid/addresses" component={Addresses} exact/>
      
                  <Route path="/userProfile/:uid/wishlist" component={Wishlist} exact/>
                  
                  </Switch>
                  </div>
                </div>
         
          
            
          
      </React.Fragment>
    )
}

export default UserDashboardWrapper
