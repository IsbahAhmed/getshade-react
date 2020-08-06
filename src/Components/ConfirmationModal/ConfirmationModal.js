import React, { useEffect, useState } from "react";
import "./ConfirmationModal.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
const ConfirmationModal = ({
  isOpen,
  setModal,
  style,
  textContent,
  btnAction,
  btnValue,
  ...restProps
}) => {
  var [modalStyle, setModalStyle] = useState({
    width: "90rem",
    height: "20vh",
    display: "grid",
    gridTemplateRows: "10fr 70fr 20fr",
    transition: "all 300ms ease",
    tranform: "scale(0)",
    ...style,
  });

  const [opacity, setOpacity] = useState("0");
  var opacityOn = () =>
    setTimeout(() => {
      setOpacity(1);
      setModalStyle((prevValue) => ({ ...prevValue, transform: "scale(1)" }));
    }, 300);
  var opacityOff = () =>
    setTimeout(() => {
      setModalStyle((prevValue) => ({ ...prevValue, transform: "scale(1)" }));
      setOpacity(0);
    }, 300);

  useEffect(() => {
    if (isOpen) {
      opacityOn();
    } else {
      opacityOff();
    }
    return ()=>{
        clearTimeout(opacityOn);
        clearTimeout(opacityOff)
    }
  }, [isOpen]);
  //   var handleResponsive = () => {
  //     if (window.innerWidth <= 425) {

  //     } else if (window.innerWidth > 425) {

  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("load", handleResponsive);
  //     window.addEventListener("resize", handleResponsive);
  //   }, []);
  //   useEffect(() => {
  //     return () => {
  //       window.removeEventListener("load", handleResponsive);
  //       window.removeEventListener("resize", handleResponsive);
  //     };
  //   }, []);

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          zIndex: "200",
          backgroundColor: "rgba(0, 0, 0, 0.452)",
          display: "flex",
          opacity: opacity ,
          justifyContent: "center",
          alignItems: "center",
          transition: "opacity 300ms ease",
        },
        content: {
          ...modalStyle,

          position: "relative",
          top: "0",
          left: "0",
        },
      }}
      onRequestClose={() => setModal(false)}
    >
      <div className="">
        <FontAwesomeIcon
          onClick={() => setModal(false)}
          className="close-confrm-modal"
          icon={faTimes}
        />
      </div>
      <div className="txt-confrm-modal">
        <Heading>{textContent}</Heading>
      </div>
      <div className="btn-cnfrm-modal">
        <Button
          value={btnValue}
          onClick={btnAction}
          style={{ width: "12rem", height: "5rem", marginRight: "1rem" }}
          colorScheme="black"
        />
        <Button
          value="CANCEL"
          onClick={() => setModal(false)}
          style={{ width: "12rem", height: "5rem" }}
          colorScheme="red"
        />
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
