import React, { useState, useEffect } from "react";
import "./OrdersList.css";
import OrderListItem from "../OrderListItem/OrderListItem";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
const OrdersList = ({ orders, reviews }) => {
  const [orderToShow, setOrdersToShow] = useState([]);

  const [ordersArray, setOrdersArray] = useState([]);
  const [orderLimit, setOrderLimit] = useState(false);
  useEffect(() => {
    //Component did mount
    setOrdersToShow([]);
    setOrdersArray([...orders]);
  }, [orders]);

  useEffect(() => {
    if (orders.length > 0) {
      orderPoper();
    }
  }, [ordersArray]);

  var orderPoper = () => {
    var array = [];
    for (let i = 3; i > 0; i--) {
      var x = ordersArray.pop();
      if (x) {
        array.push(x);
      } else {
        setOrderLimit(true);
        break;
      }
    }

    setOrdersToShow((prevValue) => [...prevValue, ...array]);
  };
  return (
    <div className="orders-list">
      {orderToShow.length ? (
        orderToShow.map((order) => {
          var reviewForthis = reviews.filter(
            ({ reviwedFor }) => reviwedFor === order.orderId
          );

          return (
            <OrderListItem
              key={order.orderId}
              order={order}
              review={reviewForthis.length ? reviewForthis[0] : ""}
            />
          );
        })
      ) : (
        <Heading style={{ color: "var(--lightblack)", justifySelf: "center" }}>
          Looks like you have'nt ordered any thing yet.Goto{" "}
          <Link style={{ textDecoration: "underline" }} to="/shop/all">
            shop
          </Link>
        </Heading>
      )}
      {orders.length && !orderLimit ? (
        <div className="show-more flex-center">
          <Button
            value="SHOW MORE"
            onClick={orderPoper}
            style={{ width: "20rem", height: "5rem" }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrdersList;
