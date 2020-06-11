import React from 'react'

const Section = (props) => {
    var {style} = props
    return (
        <div style={{...style}}>
            {props.children}
        </div>
    )
}

export default Section
