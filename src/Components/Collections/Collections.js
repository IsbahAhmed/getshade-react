import React from 'react'
import "./Collections.css"
import Heading from '../Heading/Heading'
import c1 from "../../assets/img/c1-bg.jpg"
import c2 from "../../assets/img/c2-bg.jpg"
import c3 from '../../assets/img/c3-bg.jpg'
import { useHistory } from 'react-router-dom'
const Collections = () => {
    const history = useHistory();
    const routeChange = (collectionName)=>{
        history.push(`shop/${collectionName}`)
      }
    return (
        <div className="collections">
            <div className="c1" onClick={()=>routeChange("c1")}> 
              <Heading >
                 <h1> New <br/> Opticans.</h1>
              </Heading>
        <img src={c1} alt=""/>
            </div>
            <div className="c2" onClick={()=>routeChange("c2")}>
            <Heading >
                 <h1> Extensive Collection</h1>
              </Heading>
        <img src={c2} alt=""/>
            </div>
            <div className="c3" onClick={()=>routeChange("c3")}>
            <Heading >
                 <h1> Looking Good. <br/>
           
                 </h1>
                
              </Heading>
        <img src={c3} alt=""/>
            </div>
        </div>
    )
}

export default Collections
