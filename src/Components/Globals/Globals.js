import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import SideCart from '../SideCart/SideCart'



 class Globals extends Component {
 state ={
    cartToggleValue:false
 }
 cartToglleHandler = (toggleValue)=>{
     console.log("kjhkkl")
this.setState({
   cartToggleValue: toggleValue
})
}
    render() {
    
        return (
            <div>
      
                <Navbar cartToglleHandler={this.cartToglleHandler}/>
              
      <SideCart cartToggleValue={this.state.cartToggleValue} cartToglleHandler={this.cartToglleHandler}/>
            </div>
        )
    }
}



export default Globals
