import React, { useState } from "react";
import "./Contact.css";
import SimpleInput from "../../Components/SiimpleInput/SimpleInput";
import TextArea from "../../Components/TextArea/TextArea";
import Button from "../../Components/Button/Button";
import firebase, { firestore, serverTimeStamp } from "../../Firebase/firebase";
import Heading from "../../Components/Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../../Components/Paragraph/Paragraph";
const Contact = () => {
  const [formValues, setFormValues] = useState({});
  const [statusMsg, setStatusMsg] = useState({});
  var handleFormValues = (e) => {
    var { value, name } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  var handleFileUpload = async (e) => {
    var file = e.target.files[0];
    var fileRef = firebase
      .storage()
      .ref(`contact_form_attachments/${file.name}`);
    try {
      await fileRef.put(file);
      var filepath = await fileRef.getDownloadURL();
      console.log(filepath);
      setFormValues((prevValues) => ({
        ...prevValues,
        attachmentfileLink: filepath,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };
  var handleSubmit = async (e) => {
    e.preventDefault();
    var { fullName, email, message, attachmentfileLink = "" } = formValues;

    if (fullName && email && message.length > 10) {
      try {
        await firestore
          .collection("contact_messages")
          .add({ ...formValues, createdAt: serverTimeStamp() });
          setStatusMsg({msg:"Successfully submited we will catch you up shortly!"})
      } catch (error) {
        console.log(error.message);
        setStatusMsg({error:"An error occured"})
      }
    }
    else{
        setStatusMsg({error:"Message is too short"})
    }
  };
  var { fullName, email, message } = formValues;
  return (
    <div className="contact-page-container">
      <form className="contact-main" onSubmit={handleSubmit}>
        <div className="contact-form">
          <SimpleInput
            name="fullName"
            onChange={handleFormValues}
            value={fullName}
            placeholder="Full name"
            label=""
            required
          />
          <SimpleInput
            name="email"
            onChange={handleFormValues}
            value={email}
            type="email"
            placeholder="Email"
            label=""
            required
          />
          <SimpleInput
            onChange={handleFileUpload}
            type="file"
            label="Optional"
          />
        </div>
        <div className="message-box">
          <TextArea
            name="message"
            onChange={handleFormValues}
            value={message}
            height="80%"
            required
            placeholder="Message"
          />
          <Button
            value="SUBMIT"
            style={{
              width: "15rem",
              height: "5rem",
              marginTop: "2rem",
              float: "right",
            }}
            colorScheme="black"
          />
          {statusMsg.msg ? (
            <Paragraph style={{ margin: "1rem", color: "var(--green)" }}>
              {statusMsg.msg}
            </Paragraph>
          ) : statusMsg.error ? (
            <Paragraph style={{ margin: "1rem", color: "var(--red)" }}>
              {statusMsg.error}
            </Paragraph>
          ) : (
            ""
          )}
        </div>
        <div className="store-address">
          <Heading style={{ marginTop: "5rem" }}>STORE INFORMATION</Heading>
          <Paragraph fontSize="18">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: "1rem" }}
            />{" "}
            At Glass Mall , United States
          </Paragraph>
          <Paragraph fontSize="18">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "1rem" }}
            />{" "}
            Email Us @ abc@gmail.com
          </Paragraph>
        </div>
      </form>
    </div>
  );
};

export default Contact;
