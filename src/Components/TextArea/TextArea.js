import React from 'react'
import "./TextArea.css"
const TextArea = (props) => {
    var {placeholder = "Type..",height,style,value="",fontSize = "16",...restProps} = props;
    return (
        <div className="text-area-container" style={{height}}>
            <textarea  
            value=""
            placeholder={placeholder}
            style={{...style,fontSize:`${fontSize/10}rem`}}
            {...restProps}
            ></textarea>
        </div>
    )
}

export default TextArea
