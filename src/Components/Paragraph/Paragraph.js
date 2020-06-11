import React from 'react'
import "./Paragraph.css"
const Paragraph = (props) => {
    var {style,fontSize = "14",fontWeight="400"} = props;
    return (
        <div className="paragraph-container" style={{...style,fontSize:`${fontSize/10}rem`,fontWeight}} >
            {props.children}
        </div>
    )
}

export default Paragraph
