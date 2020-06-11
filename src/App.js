import React, { Component } from 'react'


import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Auth from './Pages/Auth/Auth';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Shipping from './Pages/Shipping/Shipping';
import UserProfile from "./Pages/UserProfile/UserProfile"
import Thankyou from './Pages/Thankyou/Thankyou';
import Cart from './Pages/Cart/Cart';
import About from './Pages/About/About';
import Globals from './Components/Globals/Globals';


export class App extends Component {
  
  render() {
    return (
      <React.Fragment>
    <Globals/>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/shop/:type" component={Shop}/>
    <Route path="/auth" component={Auth}/>
    <Route path="/productDetail/:pId" component={ProductDetail}/>
    <Route path="/shipping" component={Shipping}/>
    <Route path="/userProfile/:uid" component={UserProfile}/>
    <Route path="/thankyou/:orderId" component={Thankyou}/>
    <Route path="/cart" component={Cart}/>
<Route path="/about" component={About}/>

    
    </Switch>
    </React.Fragment>
    )
  }
}

export default App
