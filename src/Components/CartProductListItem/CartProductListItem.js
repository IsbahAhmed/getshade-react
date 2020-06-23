import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import img from "../../assets/img/item-1.jpg"
import "./CartProductListItem.css"
const CartProductListItem = () => {
    return (
        <div className="item-1 item-row-setting">
        <div className="improduct">
          <img src={img} className="thumb" alt />
          <div className="info">
            <Paragraph>
                Name
            </Paragraph>
          <Paragraph>
              Color : Black glossy
          </Paragraph>
            <Paragraph fontSize="12" style={{textDecoration:"underline"}}>
                Remove
            </Paragraph>
          </div>
        </div>
        <div className="item-price ">
            <Paragraph>
                Rs 2000
            </Paragraph>
        </div>
        <div className="quantity flex-center">
            <Paragraph>
                1
            </Paragraph>
        </div>
        <div className="total-price flex-center">
            <Paragraph>
                2000
            </Paragraph>
        </div>
      </div>
      
    )
}

export default CartProductListItem
