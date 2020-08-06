import React from 'react'
import "./Orders.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import OrdersList from '../OrdersList/OrdersList'
import { connect } from 'react-redux'

import { useEffect } from 'react'
import { useState } from 'react'

const Orders = ({user,orders,reviews}) => {

const [ordersContainer,setOrdersContainer] = useState([])
useEffect(()=>{
if(orders.length){
    setOrdersContainer(orders)
}
},[orders])
    return (
        <div className="order-page-container">
            <div className="order-page-main">
            <Heading fontSize="30" style={{marginBottom:"0.5rem"}}>
          Orders
          </Heading>
          <Paragraph>
              {orders.length} ITEMS
          </Paragraph>
          <OrdersList orders={ordersContainer} reviews={reviews}/>
            </div>
        </div>
    )
}
var mapState = (state)=>({
user : state.user.currentUser,
orders : state.orders,
reviews : state.reviews
})

export default connect(mapState)(Orders)
