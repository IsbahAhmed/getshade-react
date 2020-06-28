import React, { useState } from 'react'
import "./OrderListItem.css"
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import img from "../../assets/img/item-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
const OrderListItem = (props) => {

    var {order_status = "pending"} = props;

var [orderExpandedDetail,expandDetail] = useState(false)
    var orderStatusSignColor = "grey";
    switch (order_status) {
        case "completed":
            orderStatusSignColor = "var(--green)"
            break;
    case "canceled":
        orderStatusSignColor = "var(--red)"
        default:
            break;
    }
    return (
        <div className="order-list-item">
            <div className="orderno">
            <Heading>
            Order 451534
            </Heading>
            <Paragraph className="expand-order" onClick={!orderExpandedDetail ? ()=> expandDetail(true):()=> expandDetail(false)}>
                {
                    orderExpandedDetail ? (
                        <>
                            HIDE DETAILS <FontAwesomeIcon icon={faArrowRight} rotation="270" />
                        </>
                    )
                    : (
                        <>
                        VIEW ORDER <FontAwesomeIcon icon={faArrowRight}/>
                        </>
                    )
                    
                }
            </Paragraph>
            </div>
            <div className="order_status">
                <Paragraph style={{textTransform:"uppercase"}}>
                <FontAwesomeIcon icon={faCircle} color={orderStatusSignColor} style={{marginRight:"5px"}}/> 
                {order_status}
                </Paragraph>
            </div>
            <div className="order_pix">
                <img src={img} alt=""/>
                <img src={img} alt=""/>
             
              
            </div>
            <div className={`order-expanded-detail ${orderExpandedDetail ? "order-expand-toggle" : ""}`}>
          <div className="ad-etc">
          <Heading >
                    WHERE
                </Heading>
                <Paragraph style={{marginTop:"5px"}}>
                1620 East Ayre Str Suite M3115662 <br/> Wilmington, DE 19804 United States
                </Paragraph>
                <Heading>
                    TO
                </Heading>
                <Paragraph style={{textTransform:"capitalize"}}>
                Michael doe
                </Paragraph>
          </div>
          <div className=""></div>
          <div className="last-etc">
              <Heading>
                  COST: Rs 9000
              </Heading>
              {
                  order_status === "pending" ?
                  (<Button value="CANCEL ORDER" style={{width:"20rem",height:"5rem"}} colorScheme="red"/>)
                  : ""
              }
          </div>
            </div>
        </div>
    )
}

export default OrderListItem
