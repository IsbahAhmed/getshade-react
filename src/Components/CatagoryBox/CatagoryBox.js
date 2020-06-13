import React from 'react'
import "./CatagoryBox.css"
import image from "../../assets/img/authentic-box.jpg"
import { useHistory } from 'react-router-dom'
const CatagoryBox = (props) => {
    var {style,catName,catImage,imagePath} = props
    const history = useHistory();
    const routeChange = (catName)=>{
      history.push(`shop/${catName}`)
    }
    return (
        <div className="cat-box" onClick={()=>routeChange(catName)}>
        <div className="cat-image flex-center">
            <img src={image} alt=""/>
          <h3 className="cat-name">
           abc</h3>
        </div>
   
      </div>
    )
}

export default CatagoryBox
