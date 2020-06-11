import React from 'react'
import "./Button.css"
const Button = (props) => {
    var {style,value,link} = props
    return (
        <div className="btn-container">
            <button style={{...style}}>{value}</button>
        </div>
    )
}

export default Button
