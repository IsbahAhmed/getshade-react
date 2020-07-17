import React from 'react'
import { connect } from 'react-redux'
import CatagoryBox from '../CatagoryBox/CatagoryBox'

const CatagoriesList = ({catagories}) => {
    return (
      <>
    {
        catagories.length > 0 ? 
        catagories.map((cat)=>   <CatagoryBox catInfo={cat} key={cat.catId}/>)
        : ""
    }
      </>
    )
}
var mapState = (state)=>({
catagories:state.catagories
})
export default connect(mapState)(CatagoriesList)
