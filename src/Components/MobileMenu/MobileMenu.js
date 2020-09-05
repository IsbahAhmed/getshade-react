import React, { useEffect } from 'react'
import "./MobileMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Heading from "../Heading/Heading"
import {Link} from "react-router-dom"
import { connect } from 'react-redux'
const MobileMenu = (props) => {
    var {mobile_menuStyle,mobileMenuOn,setDisplayValue,displayValue,timeOut_1,timeOut_2} = props;
  useEffect(() => {
   mobileMenuOn()
  }, [displayValue])
  useEffect(()=>{
return ()=>{
clearTimeout(timeOut_1)
clearTimeout(timeOut_2)
}
  },[])
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
            { !props.user ? <Link to="/auth">
       LOGIN/SIGNUP
         </Link>:
         <Link to={`/userProfile/${props.user.uid}`}>{props.user.firstName}</Link>
         }
            </Heading>
        </div>
      </div>
    )
}
var mapState = (state)=>({

  user:state.user.currentUser
})
export default connect(mapState)(MobileMenu)
