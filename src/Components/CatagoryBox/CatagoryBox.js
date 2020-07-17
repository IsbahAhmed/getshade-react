import React from 'react'
import "./CatagoryBox.css"

import { useHistory } from 'react-router-dom'
const CatagoryBox = (props) => {
    var {style,catagoryName,coverPhoto} = props.catInfo
    const history = useHistory();
    const routeChange = (catName)=>{
      history.push(`shop/${catName}`)
    }
    return (
        <div className="cat-box" onClick={()=>routeChange(catagoryName)}>
        <div className="cat-image flex-center">
            <img src={coverPhoto} alt=""/>
          <h3 className="cat-name">
          {catagoryName}
          </h3>
        </div>
   
      </div>
    )
}

export default CatagoryBox
