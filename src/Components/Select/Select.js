import React from 'react'
import "./Select.css"
const Select = (props) => {
    var {style,options,label,defaultOption = "Select..",...restProps} = props;

    return (
        <div className="select-container">
            <label >{label}</label>
            <select
           
            style={{...style}}
        
            {...restProps}
            >
            <option value="0">
           { defaultOption}
            </option>
          {
              options && options.map(({value,text}) => <option key={value} value={value}>{text}</option>)
          }
            </select>
        </div>
    )
}

export default Select
