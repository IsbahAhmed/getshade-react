import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import SideCart from '../SideCart/SideCart'



 class Globals extends Component {
 state ={
    cartToggleValue:false,
    initialRender:false
 }
 cartToglleHandler = (toggleValue)=>{
    
this.setState({
   cartToggleValue: toggleValue,
   initialRender:true
})

}
    render() {
    
        return (
            <div>
      
                <Navbar cartToglleHandler={this.cartToglleHandler}/>
              
      <SideCart initialRender={this.state.initialRender} cartToggleValue={this.state.cartToggleValue} cartToglleHandler={this.cartToglleHandler}/>
            </div>
        )
    }
}



export default Globals
