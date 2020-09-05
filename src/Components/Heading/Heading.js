import React from 'react'
import "./Heading.css"
const Heading = (props) => {
    var {style,fontSize = "18",fontWeight="600",...restProps} = props;

    return (
        <div className={`heading-container `}
         style={{...style,fontSize:`${fontSize/10}rem`,
         fontWeight}} 
         {...restProps}
         >
            {props.children}
        </div>
    )
}

export default Heading
