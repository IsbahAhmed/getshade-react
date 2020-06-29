import React from 'react'
import "./OurTeam.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import team_1 from "../../assets/img/team-1.jpg";
import team_2 from "../../assets/img/team-2.jpg";
import team_3 from "../../assets/img/team-3.jpg";
const OurTeam = () => {
    return (
    <React.Fragment>
      <div className="leadership">
      <Heading style={
            {
                paddingBottom:"5px",
                borderBottom:"1px solid black"
               
            }
            
        }
        fontSize="30"
        >
            LEADERSHIP TEAM
        </Heading>
        <Paragraph>
            We are driven to give access, optoins an freedom to vision
            <br/> consumers worldwide
            </Paragraph>
      </div>
        <div className="team-members">
            <div className="team-box">
           <div className="t-img" style={{background:`url(${team_1})`,backgroundSize:"100% 100% , cover"}}> </div>
        <div className="team-name" style={{background:"white"}}>
        <Heading >
            Alexender
            </Heading>
            <Paragraph>
                CEO
            </Paragraph>
        </div>
            </div>
            <div className="team-box">
           <div className="t-img" style={{background:`url(${team_3})`,backgroundSize:"100% 100% , cover"}}> </div>
        <div className="team-name" style={{background:"white"}}>
        <Heading >
           Olivia
            </Heading>
            <Paragraph>
                CFO
            </Paragraph>
        </div>
            </div>
            <div className="team-box">
           <div className="t-img" style={{background:`url(${team_2})`,backgroundSize:"100% 100% , cover"}}> </div>
        <div className="team-name" style={{background:"white"}}>
        <Heading >
           Charlette
            </Heading>
            <Paragraph>
                CEO
            </Paragraph>
        </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default OurTeam
