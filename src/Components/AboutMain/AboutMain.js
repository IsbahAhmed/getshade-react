import React from 'react'
import "./AboutMain.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
const AboutMain = () => {
    return (
  <React.Fragment>
            <div className="about-content">
            <Heading fontSize="25" style={{paddingBottom:"5px",borderBottom:"1px solid black",alignSelf:"flex-start"}}>
                ABOUT US
            </Heading>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veniam id, voluptatem ea ex reprehenderit deserunt illum quisquam enim architecto dignissimos atque nam, optio explicabo? Inventore quasi error consequatur iure?
            </Paragraph>
            </div>
            <div className="xc-pix">

            </div>
      </React.Fragment>
    )
}

export default AboutMain
