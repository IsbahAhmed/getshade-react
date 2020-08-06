import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { addReview } from "../../Redux/reviews/reviewActions";
import "./addreviewmodal.css"
import { getSiblings } from "../../Utility/Utility";
import Paragraph from "../Paragraph/Paragraph";
import { serverTimeStamp } from "../../Firebase/firebase";
const AddReviewModal = ({ isOpen, setModal, addReview , userId , orderId }) => {
  var handleOrderReview = () => {
    var reviewObj = {};
  };

  const [array, setArray] = useState([]);
  const [selectedStars, setSelectedStars] = useState(1);
  const [feedBack,setFeedBack]   = useState("")
  const [errorMsg,setErrorMsg] = useState("")
  useEffect(() => {
    var tempArr = [];
    for (let i = 1; i <= 5; i++) {
      tempArr.push(i);
    }
    setArray(tempArr);
  }, []);
  var [modalStyle, setModalStyle] = useState({
    width: "50rem",
    height: "30vh",
    display: "grid",
    gridTemplateRows: "10fr 10fr 60fr 20fr",
    rowGap:"1rem",
    transition: "all 300ms ease",
    tranform: "scale(0)",
  });

  const [opacity, setOpacity] = useState("0");
  var opacityOn = () =>
    setTimeout(() => {
      setOpacity(1);
      setModalStyle((prevValue) => ({ ...prevValue, transform: "scale(1)" }));
    }, 300);
  var opacityOff = () =>
    setTimeout(() => {
      setModalStyle((prevValue) => ({ ...prevValue, transform: "scale(0)" }));
      setOpacity(0);
    }, 300);

  useEffect(() => {
    if (isOpen) {
      opacityOn();
    } else {
      opacityOff();
    }
    return () => {
      clearTimeout(opacityOn);
      clearTimeout(opacityOff);
    };
  }, [isOpen]);

  var handleStarselection = (e)=>{
      var targetStar = e.target;
      var {id} = targetStar;
  
      var siblings = getSiblings(e.target);
   siblings.forEach((sib)=>{
       sib.classList.remove('selected-star')
   })
   for (let i = id; i > 0; i--) {
      if(i === id){
          targetStar.classList.add('selected-star')
      }
      else{
          siblings[i-1].classList.add('selected-star')
      }
       
   }
 setSelectedStars(id)
  
   
  }

  var handleSubmit = ()=>{
    if(selectedStars && feedBack && feedBack.length >= 30){
      var reviewObj = {
        reviewedAt:serverTimeStamp(),
        reviwedBy:userId,
        reviwedFor: orderId,
        stars:selectedStars,
        feedBack
      }
      addReview(reviewObj)
    }
    else{
      setErrorMsg("Feedback message is too short. It should be atleast 30 characters long.")
    }
  }


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
          opacity: opacity,
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
      <div className="stars">
         
        <FontAwesomeIcon
      
          id="1"
          onClick={handleStarselection}
          icon={faStar}
          style={{  cursor: "pointer",fontSize:"2rem",margin:"0 3px" }}
          className="xyx"
        />
        <FontAwesomeIcon
        id="2"
          onClick={handleStarselection}
          icon={faStar}
          style={{  cursor: "pointer",fontSize:"2rem",margin:"0 3px" }}
        />{" "}
        <FontAwesomeIcon
    id="3"
          onClick={handleStarselection}
          icon={faStar}
          style={{  cursor: "pointer",fontSize:"2rem",margin:"0 3px" }}
        />{" "}
        <FontAwesomeIcon
      id="4"
          onClick={handleStarselection}
          icon={faStar}
          style={{  cursor: "pointer",fontSize:"2rem",margin:"0 3px" }}
        />{" "}
        <FontAwesomeIcon
        id="5"
        onClick={handleStarselection}
        
          icon={faStar}
          style={{  cursor: "pointer",fontSize:"2rem",margin:"0 3px" }}
        />
       
      </div>
      <div className="feed-back-msg">
      <textarea value={feedBack} 
  style={feedBack.length < 30 ? {borderColor:"var(--red)"}:{}}
      onChange={(e)=>setFeedBack(e.target.value)} placeholder="Enter feedback"></textarea>
      {
        (errorMsg) && <Paragraph style={{color:"var(--red)"}}>{errorMsg}</Paragraph> 
      }
      </div>
      <div className="btn-cnfrm-modal">
        <Button
          value="SUBMIT"
          style={{ width: "12rem", height: "5rem", marginRight: "1rem" }}
          colorScheme="black"
          onClick={handleSubmit}
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

var actions = {
  addReview,
  
};
export default connect(null, actions)(AddReviewModal);
