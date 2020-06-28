import React from 'react'
import "./List.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const List = (props) => {
    var {list_items,style,onClickfn,fontSize = "16",iconColor = "black",listIcon,...restProps} = props;
    return (
        <ul className="list-container" style={{fontSize:`${fontSize/10}rem`,...style}}>
            {
                list_items && list_items.map((content)=>  <li onClick={onClickfn} key={content}> <div className="list-icon"><FontAwesomeIcon color={iconColor} icon={listIcon}/></div>{content}</li>)
            }
        </ul>
    )
}

export default List
