import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <React.Fragment>
     <div className="footer">
  <div className="foot-logo">
    {/* <img src="img/logo-white.png" alt=""> */}
    <h1>Get Shade</h1>
    <p>
      Get Shade is an online sunglasses store that has continually featured a variety of high-quality imported and affordable products since day one.
      Our passion for excellence has driven us from the beginning, and continues to drive us into the future. The team at Get Shade knows that every product counts, and strives to make the entire shopping experience as rewarding and fun as possible. Check out our store and become a new Trend Setter, and get in touch with questions or requests.
    </p>
  </div>
  <div className="foot-cont">
    <h2>Links</h2>
    <ul>
      <li>
          <Link to="/">
              HOME
          </Link>
      </li>
      <li>
        <Link to="/shop/all">
        SHOP
        </Link>
      </li>
      <li>
          <Link to="/about"> 
          ABOUT
          </Link>
      </li>
      <li>
          <Link to="/contact">
          CONTACT
          </Link>
      </li>
    </ul>
  </div>
  <div className="foot-links">
    {/* <h2>Contact</h2>
<ul>
   <li>Email <span>taha@gmail.com</span></li>
   <li>Phone +92300-4567890</li> 
</ul> */}
    <h2>Subscribe To Newsletter</h2>
    <form action className="ui form">
      <div className="field">
        <input type="email" required style={{height: '20px !important', color: 'white !important', backgroundColor: 'transparent !important', border: 'none !important', borderBottom: '1px solid white !important', fontSize: '1.4rem !important'}} placeholder="Enter Email" />
        <button className="ui basic green button" style={{marginTop: '1.5rem !important', fontSize: '1.4rem', float: 'right'}} value="submit">Submit</button>
      </div>
    </form>
  </div>
</div>

        </React.Fragment>
    )
}

export default Footer
