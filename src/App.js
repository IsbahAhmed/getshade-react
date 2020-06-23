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
import Footer from './Components/Footer/Footer';
import Error404 from './Pages/Error404/Error404';
import Contact from './Pages/Contact/Contact';

export class App extends Component {
  
  render() {
    return (
      <React.Fragment>
    <Globals/>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/shop/:type" component={Shop} exact/>
    <Route path="/auth" component={Auth} exact/>
    <Route path="/productDetail/:pId" component={ProductDetail} exact/>
    <Route path="/shipping/:uid" component={Shipping} exact/>
    <Route path="/userProfile/:uid" component={UserProfile}exact/>
    <Route path="/thankyou/:orderId" component={Thankyou}exact/>
    <Route path="/cart" component={Cart} exact/>
<Route path="/about" component={About} exact/>
<Route path="/contact" component={Contact} exact />
<Route path="/:any" component={Error404} />
    
    </Switch>
   <Footer/>
    </React.Fragment>
    )
  }
}

export default App
