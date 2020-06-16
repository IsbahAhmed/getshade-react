import React, { useState } from 'react'
import "./Button.css"
const Button = (props) => {
  
    var {style,value,link,colorScheme,backgroundColor} = props;

var classVarient = "";
    switch (colorScheme) {
        case "black":
          classVarient="black-scheme"
          break;
         case "white":
             classVarient = "white-scheme" 
             break;
          case "blue":
              classVarient = "blue-scheme" 
              break;
          default:
          classVarient = "blue-scheme"
          break;
     
    }
  
    return (
        <div className="btn-container">
            <button 
            style={{...style,backgroundColor}}
            className={classVarient}
            >{value}</button>
        </div>
    )
}

export default Button
