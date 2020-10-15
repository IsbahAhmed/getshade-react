import React, { useEffect } from "react";
import Modal from "react-modal";
import "./QuickView.css";
import Heading from "../Heading/Heading";
import useStateWithCallback from "use-state-with-callback";

import { Link } from "react-router-dom";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getSiblings } from "../../Utility/Utility";
import { v4 as uuid } from "uuid";
import QVquantity from "../QVquantity/QVquantity";
Modal.setAppElement("#root");

const QuickView = ({ setModal, productInfo }) => {
  var {
    name,
    price,
    descriptions,
    imagesLinks,
    selectedColors,
    productId,
    serial,
  } = productInfo;
  ///setting timeouts for image change
  var initialTimeout = (link) =>
  setTimeout(() => {
    selectImage({ linkType: "org", link });
  }, 1000);

var changeTimeout = (link) =>
  setTimeout(() => {
    selectImage({ linkType: "org", link });
  }, 500);
  var [modalStyle, setModalStyle] = useState({
    width: "90",

    flexFlow: "",
  });
  /////
  var handleResponsive = () => {
    if (window.innerWidth <= 425) {
      setModalStyle((prevState) => ({
        ...prevState,
        flexFlow: "column",
      }));
    } else if (window.innerWidth > 425) {
      setModalStyle((prevState) => ({
        ...prevState,
        flexFlow: "",
      }));
    }
  };
  /////////////////////
  useEffect(() => {
    window.addEventListener("load", handleResponsive);
    window.addEventListener("resize", handleResponsive);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("load", handleResponsive);
      window.removeEventListener("resize", handleResponsive);
      clearTimeout(initialTimeout);
      clearTimeout(changeTimeout);
    };
  }, []);
///////////////////
  const [loadCheck, setLoadCheck] = useState(true);
  const [multiPics, setMultiPics] = useState([]);

  var [selectedImage, selectImage] = useStateWithCallback({}, () => {
    if (selectedImage) {
      if (selectedImage.linkType === "comp") {
        setLoadCheck(true);
      } else {
        setLoadCheck(false);
      }
    }
  });
 
/////
  var colorSelector = (e) => {
    var siblings = getSiblings(e.target);
    var ele = e.target;
    ele.classList.add("selected-color");

    siblings.forEach((sib) => {
      sib.classList.remove("selected-color");
    });
  };

  /// setting up multi pics and initial load
  useEffect(() => {
    if (imagesLinks.length) {
      var tempArr = [];
      selectImage({ linkType: "comp", link: imagesLinks[0].comp_url });
      initialTimeout(imagesLinks[0].org_link);

      imagesLinks.forEach((linkObj) => {
        tempArr.push({ ...linkObj });
      });
      setMultiPics([...tempArr]);
    }
  }, [imagesLinks]);
  
  /// link selector
  var linkSelector = (e) => {

    var { name, src } = e.target;

    var link = name;
    if (link !== selectedImage.link) {
      selectImage({ linkType: "comp", link: src });
      changeTimeout(link);
    }
  };
  

  //
  var { width, display, flexFlow } = modalStyle;

  return (
    <Modal
      isOpen={true}
      style={{
        overlay: {
          zIndex: "200",
          backgroundColor: "rgba(0, 0, 0, 0.452)",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          width: `${width}rem`,
          height: "minmax(70vh,min-content)",
          position: "relative",
          top: "0",
          left: "0",
          display: "flex",
          flexFlow,
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}
      onRequestClose={() => setModal(false)}
    >
      <FontAwesomeIcon
        onClick={() => setModal(false)}
        className="close-quick"
        icon={faTimes}
      />
      <div className="quick-pic">
        <div className="image-prev">
          <img src={selectedImage.link} className={loadCheck ? "blur-image":""} alt="" />
        </div>
        <div className="quick-multi-pix">
          {multiPics.map((img) => {
            //check initial Image
      
              return (
                <div key={uuid()} >
                  <img src={img.comp_url} name={img.org_link} onClick={linkSelector} alt="" />
                </div>
              );
  
          })}
        </div>
      </div>
      <div className="quick-des">
        <Heading fontSize="30" style={{ textTransform: "capitalize" }}>
          {name}
        </Heading>

        <Heading style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "1rem" }}>Rs{price}</h3>
          <Link to={`/productDetail/${serial}`}>View Details</Link>
        </Heading>
        <div className="color-select-qv">
          {selectedColors.map((color) => (
            <div
              key={uuid()}
              className="color-1 "
              style={{ background: `var(--${color})` }}
              onClick={colorSelector}
            ></div>
          ))}
        </div>
        <QVquantity />
      </div>
    </Modal>
  );
};

export default QuickView;
