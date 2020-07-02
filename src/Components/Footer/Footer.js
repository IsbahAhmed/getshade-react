import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Paragraph from '../Paragraph/Paragraph'
const Footer = () => {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="foot-logo">
   
            <h1>Get Shade</h1>

            <Paragraph style={{marginRight:"5rem"}}>
              Get Shade is an online sunglasses store that has continually
              featured a variety of high-quality imported and affordable
              products since day one. Our passion for excellence has driven us
              from the beginning, and continues to drive us into the future.
            </Paragraph>
          </div>
          <div className="foot-cont">
            <h2>Links</h2>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/shop/all">SHOP</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="foot-links">
            <h2>Contact Us</h2>
         <Paragraph>
         <p>
              abc@gmail.com
            </p>
            <p>
              +92 3243242173
            </p>
         </Paragraph>

          </div>
        </div>
      </React.Fragment>
    );
}

export default Footer
