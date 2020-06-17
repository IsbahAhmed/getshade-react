import React, { useState } from 'react'
import "./Shop.css"
import ShopHeader from '../../Components/ShopHeader/ShopHeader'
const Shop = () => {
  
    return (
        <div className="shop-page">
            {/* <div className={`abc flex-center ${off === 1 ? ("off") : "on"}`}>
                <button onClick={off === 1 ? ()=> setOff(0):()=> setOff(1)}>
                    click
                </button>
                <ul style={off === 1 ? {display:"none"}:{display:"block"}}>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                    <li>item5</li>
                </ul>
            </div> */}
    <div className="main-shop">
        <ShopHeader/>
    </div>
        </div>
    )
}

export default Shop
