import React, { useEffect } from "react";
import Modal from "react-modal";
import "./QuickView.css";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import { Link } from "react-router-dom";
import SimpleInput from "../SiimpleInput/SimpleInput";
import Button from "../Button/Button";
import img from "../../assets/img/item-1.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { getSiblings } from "../../Utility/Utility";

Modal.setAppElement("#root");

const QuickView = ({ setModal }) => {
  var [modalStyle, setModalStyle] = useState({
    width: "90",

    flexFlow: "",
  });
  var handleResponsive = () => {
    if (window.innerWidth <= 425) {
      setModalStyle((prevState) => ({
        ...prevState,
        flexFlow: "column",
      }));
    } else if (window.innerWidth > 425) {
      console.log(window.innerWidth);

      setModalStyle((prevState) => ({
        ...prevState,
        flexFlow: "",
      }));
    }
  };
  useEffect(() => {
    window.addEventListener("load", handleResponsive);
    window.addEventListener("resize", handleResponsive);
  }, []);
  useEffect(() => {
    return () => {
      window.removeEventListener("load", handleResponsive);
      window.removeEventListener("resize", handleResponsive);
    };
  }, []);

  var colorSelector = (e)=>{
    var siblings = getSiblings(e.target)
    var ele = e.target;
    ele.classList.add("selected-color")
 
    siblings.forEach((sib)=>{
      sib.classList.remove("selected-color")
    })

  }

  var { width, display, flexFlow } = modalStyle;
  console.log(modalStyle);
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
        className="close-quick" icon={faTimes}/>
      <div className="quick-pic">
        <div className="image-prev">
          <img src={img} alt="" />
        </div>
        <div className="quick-multi-pix">
          <div className="">
            <img src={img} alt="" />
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className="quick-des">
        <Heading fontSize="30">NAME</Heading>
        <Heading style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "1rem" }}>$35</h3>
          <Link to="productDetail/12">View Details</Link>
        </Heading>
        <div className="color-select-qv">
            <div className="color-1 selected-color" style={{background:'var(--black)'}} onClick={colorSelector}></div>
            <div className="color-2" style={{background:'var(--yellow)'}} onClick={colorSelector}></div>
            <div className="color-3" style={{background:'var(--green)'}} onClick={colorSelector}></div>
        </div>
        <SimpleInput
          width="7rem"
          type="number"
          placeholder=""
          label="Quantity"
        />
        <Button
          value="ADD TO CART"
          colorScheme="black"
          style={{ width: "100%", height: "5rem" }}
        />
      </div>
    </Modal>
  );
};

export default QuickView;
