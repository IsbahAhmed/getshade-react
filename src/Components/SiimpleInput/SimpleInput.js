import React from 'react'
import "./SimpleInput.css"
const SimpleInput = (props) => {
    var {value = "",width,type,placeholder = "label",
    style,fontSize = "16",...restProps} = props;

    return (
        <div className="simple-input-container" style={{minWidth:"min-content",width}}>
            <input 
            value={value}

            type={type}
            placeholder={placeholder}
            style={{...style,fontSize:`${fontSize/10}rem`}}
       
            {...restProps}
            />
        </div>
    )
}

export default SimpleInput
