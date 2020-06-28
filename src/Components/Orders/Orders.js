import React from 'react'
import "./Orders.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import OrdersList from '../OrdersList/OrdersList'
const Orders = () => {
    return (
        <div className="order-page-container">
            <div className="order-page-main">
            <Heading fontSize="30" style={{marginBottom:"0.5rem"}}>
          Orders
          </Heading>
          <Paragraph>
              8 ITEMS
          </Paragraph>
          <OrdersList/>
            </div>
        </div>
    )
}

export default Orders
