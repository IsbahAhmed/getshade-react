import React, { useState } from 'react'
import "./ShopFilters.css"
import Heading from '../Heading/Heading';
import SimpleInput from '../SiimpleInput/SimpleInput';
import Paragraph from '../Paragraph/Paragraph';
import {getSiblings} from "../../Utility/Utility"
const ShopFilters = () => {
    var [pricefilterScale,setFilterToggle] = useState(0)
    var [colorfilterScale,setcolorFilterToggle] = useState(0)
    var [priceMinValue,setPrice_minValue] = useState(0)
    var [priceMaxValue,setPrice_maxValue] = useState(4000)

  var colorSelector = (e)=>{
    var siblings = getSiblings(e.target)
    var ele = e.target;
    ele.classList.add("selected-color")
 
    siblings.forEach((sib)=>{
      sib.classList.remove("selected-color")
    })

  }
    return (
        <div className="shop-filters">
        <Heading fontSize="23" style={{textAlign:"center",paddingBottom:"1rem"}}>Filter By</Heading>
     
        <div
          className="filter-row-setting"
         
        >
          <div className="name-filter "
           onClick={
            pricefilterScale === 1
              ? () => {
                  setFilterToggle(0);
                }
              : () => setFilterToggle(1)
          }
          >
            <Heading>Price</Heading>
            <div
              className={`toggle-icon ${
                pricefilterScale === 1 ? "crossed" : ""
              }`}
            >
              <Heading fontSize="23">+</Heading>
            </div>
          </div>
          <div className="filter-options price-filter" 
          style={pricefilterScale === 1 ? {display:"flex"}:{display:"none"}}>
           <div className="from" style={{width:"7rem"}}>
               <Paragraph style={{marginBottom:"1rem"}} fontWeight="600">
                  Min
               </Paragraph>
               <SimpleInput width="6rem" type="number" value={priceMinValue} 
               min={priceMinValue}
               max={priceMaxValue}
               onChange={(e)=> {
          
                   setPrice_minValue(e.target.value)}}
               placeholder=""/>
           </div>
           <div className="to" style={{width:"7rem"}} >
           <Paragraph style={{marginBottom:"1rem"}} fontWeight="600">
                   Max
               </Paragraph>
           <SimpleInput
                min={priceMinValue}
                max={priceMaxValue}
           type="number" width="6rem"
            onChange={(e)=> setPrice_maxValue(e.target.value)}
           value={priceMaxValue} placeholder=""/>

           </div>
          </div>
        </div>
        <div
          className="filter-row-setting" >
          <div className="name-filter "
           onClick={
            colorfilterScale === 1
              ? () => {
                  setcolorFilterToggle(0);
                }
              : () => setcolorFilterToggle(1)
          }
          >
            <Heading>Color</Heading>
            <div
              className={`toggle-icon ${
                colorfilterScale === 1 ? "crossed" : ""
              }`}
            >
              <Heading fontSize="23">+</Heading>
            </div>
          </div>
          <div className="filter-options color-filter" 
          style={colorfilterScale === 1 ? {display:"flex"}:{display:"none"}}>
            <div className="color-select" style={{background:'var(--black)'}} onClick={colorSelector}></div>
            <div className="color-select" style={{background:'var(--yellow)'}} onClick={colorSelector}></div>
            <div className="color-select" style={{background:'var(--green)'}} onClick={colorSelector}></div>
          </div>
        </div>
      </div>
    )
}

export default ShopFilters
