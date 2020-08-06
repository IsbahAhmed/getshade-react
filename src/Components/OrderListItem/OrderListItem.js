import React, { useState } from "react";
import "./OrderListItem.css";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import img from "../../assets/img/item-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { useEffect } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { countryNameFind } from "../../Utility/Utility";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { cancelOrder } from "../../Redux/orders/orderActoins";
import AddOrderReview from "../AddOrderReview/AddOrderReview";
import Review from "../Review/Review";

const OrderListItem = ({ order, review, products, cancelOrder, user }) => {
  var {
    orderStatus,
    shippingInfo,
    orderId,
    orderedItems,
    subtotal,
    shippingCost,
  } = order;

  var { postalCode, first_name, last_name, address, country } = shippingInfo;
  const [modal, setModal] = useState(false);
  var [orderExpandedDetail, expandDetail] = useState(false);

  const [orderedItemsContainer, setorderedItemsContainer] = useState([]);

  useEffect(() => {
    var array = orderedItems.map((itemId) => {
      var orderedItemObj = products.filter(
        ({ productId }) => productId === itemId
      );
      return { ...orderedItemObj[0] };
    });
    setorderedItemsContainer(array);
  }, []);
  var orderStatusSignColor = "grey";
  switch (orderStatus) {
    case "completed":
      orderStatusSignColor = "var(--green)";
      break;
    case "canceled":
      orderStatusSignColor = "var(--red)";
      break;
    default:
      break;
  }

  var handleOrderCancellation = () => {
    var orderObj = {
      ...order,
      orderStatus: "canceled",
    };
    cancelOrder(orderObj);
    setModal(false);
  };

  return (
    <div className="order-list-item">
      <div className="orderno">
        <Heading>Order {orderId.substring(0, 5)}</Heading>
        <Paragraph
          className="expand-order"
          onClick={
            !orderExpandedDetail
              ? () => expandDetail(true)
              : () => expandDetail(false)
          }
        >
          {orderExpandedDetail ? (
            <>
              HIDE DETAILS{" "}
              <FontAwesomeIcon icon={faArrowRight} rotation="270" />
            </>
          ) : (
            <>
              VIEW ORDER <FontAwesomeIcon icon={faArrowRight} />
            </>
          )}
        </Paragraph>
      </div>
      <div className="order_status">
        <Paragraph style={{ textTransform: "uppercase" }}>
          <FontAwesomeIcon
            icon={faCircle}
            color={orderStatusSignColor}
            style={{ marginRight: "5px" }}
          />
          {orderStatus}
        </Paragraph>
      </div>
      <div className="order_pix">
        {orderedItemsContainer.map(({ imagesLinks }) => (
          <img src={imagesLinks[0].comp_url} key={uuid()} />
        ))}
      </div>
      <div
        className={`order-expanded-detail ${
          orderExpandedDetail ? "order-expand-toggle" : ""
        }`}
      >
        <div className="ad-etc">
          <Heading>WHERE</Heading>
          <Paragraph style={{ marginTop: "5px" }}>
            {address} <br /> , {postalCode} {countryNameFind(country)}
          </Paragraph>
          <Heading>TO</Heading>
          <Paragraph style={{ textTransform: "capitalize" }}>
            {first_name + " " + last_name}
          </Paragraph>
        </div>
        <div className=""></div>
        <div className="last-etc">
          <Heading>COST: Rs {shippingCost + subtotal}</Heading>
          {orderStatus === "pending" ? (
            <Button
              value="CANCEL ORDER"
              onClick={() => setModal(true)}
              style={{ width: "20rem", height: "5rem" }}
              colorScheme="red"
            />
          ) : (
            ""
          )}
          {orderStatus === "completed" && !review ? (
            <AddOrderReview orderId={orderId} userId={user.uid} />
          ) : orderStatus === "completed" && review ? (
            <Review review={review}/>
          )
        :""
        }
          {orderStatus == "pending" && (
            <ConfirmationModal
              setModal={setModal}
              isOpen={modal}
              btnValue="CONFIRM"
              btnAction={handleOrderCancellation}
              textContent="Do you want to cancel this order?"
            />
          )}
        </div>
      </div>
    </div>
  );
};
var mapState = (state) => ({
  products: state.products,
  user: state.user.currentUser,
});
var actions = {
  cancelOrder,
};
export default connect(mapState, actions)(OrderListItem);
