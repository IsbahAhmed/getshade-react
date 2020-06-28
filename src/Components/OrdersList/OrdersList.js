import React from 'react'
import "./OrdersList.css"
import OrderListItem from '../OrderListItem/OrderListItem'
import Button from '../Button/Button'
const OrdersList = () => {
    return (
        <div className="orders-list">
        
     <OrderListItem/>
     <OrderListItem order_status="completed"/>
     <OrderListItem order_status="canceled"/>
     <div className="show-more flex-center">
         <Button value="SHOW MORE" style={{width:"20rem",height:"5rem"}}/>
     </div>
        </div>
    )
}

export default OrdersList
