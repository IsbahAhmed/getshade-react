import React, { useEffect } from "react";

import "./Product.css";
import Paragraph from "../Paragraph/Paragraph";
import { useHistory } from "react-router-dom";
import QuickView from "../QuickView/QuickView";
import { useState } from "react";
import Heading from "../Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Redux/wishlist/wishlistActions";

const Product = ({
  productInfo,
  style,
  className,
  addToWishlist,
  wishlist,
  user,
  removeFromWishlist,
}) => {
  var {
    imagesLinks = [],
    name,
    price,
    newArrival,
    serial,
    productId,
  } = productInfo;
  const [wishlistItemMember, setwishlistItemMember] = useState(false);

  ///checking wishlist
  useEffect(() => {
    if (wishlist) {
      var tempCheck = wishlist.filter((item) => item.productId === productId);
      if (tempCheck.length) {
        setwishlistItemMember({ ...tempCheck[0] });
      } else {
        setwishlistItemMember(false);
      }
    }
  }, [wishlist]);

  var [modalOpen, setModal] = useState(false);
  var history = useHistory();
  var productDetail = () => {
    history.push(`/productDetail/${serial}`);
  };
  return (
    <React.Fragment>
      <div
        className={`item item-setting ${className}`}
        style={{ ...style }}
        id=""
      >
        {user && wishlistItemMember ? (
          <abbr
            onClick={() =>
              removeFromWishlist(wishlistItemMember.wishlistItemId)
            }
            title="Remove from wishlist"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="wishlist-btn"
              style={{ color: "var(--red)" }}
            />
          </abbr>
        ) : (
          <abbr
            title="Add to wishlist"
            onClick={() =>
              addToWishlist({
                productId,
                addedBy: user.uid,
                wishlistItemCode: productId + user.uid,
              })
            }
          >
            <FontAwesomeIcon icon={faHeart} className="wishlist-btn" />
          </abbr>
        )}

        <div className="quick-view" onClick={() => setModal(true)}>
          <Paragraph>Quick View</Paragraph>
        </div>
        <div className="pic" onClick={productDetail}>
          <div className="new">
            <p>New Arrival</p>
          </div>
          <img src={imagesLinks[0].org_link} />
        </div>
        <div className="text">
          <Heading
            className="itemname"
            style={{ textTransform: "capitalize" }}
            name="item-name"
          >
            {name}
          </Heading>
          <Heading id="price-1">{price}</Heading>
        </div>
      </div>
      {modalOpen ? (
        <QuickView setModal={setModal} productInfo={productInfo} />
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
var mapState = (state) => ({
  user: state.user.currentUser,
  wishlist: state.wishlist,
});
var actions = {
  addToWishlist,
  removeFromWishlist,
};
export default connect(mapState, actions)(Product);
