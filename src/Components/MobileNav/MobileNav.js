import React from 'react'
import "./MobileNav.css"
import logo from "../../assets/img/logo-plane.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faBars } from '@fortawesome/free-solid-svg-icons'
const MobileNav = () => {
    return (
       <div>
  <div className="mobile-nav">
    <div className="m-menu flex-center">
      {/* <img src="img/menu.svg" id="ham" /> */}
      <FontAwesomeIcon icon={faBars} />
    </div>
    <div className="m-logo flex-center">
      <img src={logo}  />
    </div>
    <div className="m-cart flex-center cart-123">
      <img src="img/shopping-cart.svg"  />
      <div className="cart-count flex-center" />
    </div>
  </div>
  <div className="mobile-menu">
    <div className="cross ">
      <img src="img/cross.svg" id="cross" />
    </div>
    <div className="menu">
      <h1 className="flex-center">HOME</h1>
      <h1 className="flex-center">SHOP</h1>
      <h1 className="flex-center">ABOUT</h1>
      <h1 className="flex-center">CART</h1>
    </div>
  </div>
</div>

    )
}

export default MobileNav
