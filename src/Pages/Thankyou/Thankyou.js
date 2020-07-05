import React from 'react'
import "./Thankyou.css"
import Heading from '../../Components/Heading/Heading'
import Paragraph from '../../Components/Paragraph/Paragraph'
import QuickView from '../../Components/QuickView/QuickView'
const Thankyou = () => {
    return (
        <div className="thanku-container">
          <div className="thank-main" >
              <Heading fontSize="40" style={{letterSpacing:"2px"}}>
               CONGRATZ
              </Heading>
            <Paragraph fontSize="20">
                Your order has been placed <br/>
            Thank you for your purchase from Get Shade. <br/>
            Please let us know if we can do anything else to help!
            </Paragraph>
            <Paragraph style={{color:"var(--green)"}}>
                We will send you confirmation email shortly.
            </Paragraph>
          </div>
        
        </div>
    )
}

export default Thankyou
