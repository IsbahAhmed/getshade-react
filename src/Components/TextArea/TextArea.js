import React from 'react'
import "./TextArea.css"
const TextArea = (props) => {
    var {placeholder = "Type..",height,style,fontSize = "16",...restProps} = props;
    return (
        <div className="text-area-container" style={{height}}>
            <textarea  
          
            placeholder={placeholder}
            style={{...style,fontSize:`${fontSize/10}rem`}}
            {...restProps}
            ></textarea>
        </div>
    )
}

export default TextArea
