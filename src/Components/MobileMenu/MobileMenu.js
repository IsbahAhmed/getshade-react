import React, { useEffect } from 'react'
import "./MobileMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Heading from "../Heading/Heading"
import {Link} from "react-router-dom"
const MobileMenu = (props) => {
    var {mobile_menuStyle,mobileMenuOn,setDisplayValue,displayValue} = props;
  useEffect(() => {
   mobileMenuOn()
  }, [displayValue])
    return (
        <div
        className={`mobile-menu `}
        style={{
          display: mobile_menuStyle.display,
         opacity:mobile_menuStyle.opacity
        }}
      >
        <div className="cross ">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setDisplayValue(false)}
          />
        </div>
        <div className="menu">
            <Heading>
            <Link to="/">HOME</Link>
            </Heading>
            <Heading>
            <Link to="/shop/all">SHOP</Link>
            </Heading>
            <Heading>
            <Link to="/about">ABOUT</Link>
            </Heading>
            <Heading>
            <Link to="/contact">CONTACT</Link>

            </Heading>
            <Heading>
            <Link to="/auth">SIGN IN</Link>
            </Heading>
        </div>
      </div>
    )
}

export default MobileMenu
