import React, { useState } from "react";
import StyledInput from "../StyledInput/StyledInput";

import "./NewsLetter.css";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { firestore } from "../../Firebase/firebase";
const NewsLetter = () => {
  const [statusMsg, setStatusMsg] = useState({
    msg: "",
    error: "",
  });
  var [inputValue, setValue] = useState("");
  var handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue) {
      try {
        await firestore
          .collection("newsletter_subcriptions")
          .doc(inputValue)
          .set({ email: inputValue });
        setStatusMsg({ msg: "Successfully subscribed to newsletter!" });
      } catch (error) {
        console.log(error.message);
        setStatusMsg({ error: "An error occured!" });
      }
    }
  };
  return (
    <div className="newsletter">
      <div className="text-part">
        <Heading className="text-part-h" fontSize="25">
          Getshade is here <br /> for creative pros to carry, build & hack life
          better
        </Heading>
      </div>

      <div className="form-part">
        <form className="input-xs" onSubmit={handleSubmit}>
          <div className="">
            <div className="xs1">
              <StyledInput
                required
                value={inputValue}
                placeholder="Enter Email"
                type="email"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="xs2 ">
              <Button
                value="SUBSCRIBE &rarr;"
                colorScheme="black"
                style={{
                  color: "black",
                  paddingBottom: "1rem",
                  border: "none",
                  width: "max-content",
                  fontWeight: "600",
                  letterSpacing: "3px",
                }}
                backgroundColor="transparent"
              />
            </div>
          </div>
          {statusMsg.msg ? (
            <Paragraph
              style={{
                textAlign: "start",
                marginTop: "1rem",
                color: "var(--green)",
              }}
            >
              {statusMsg.msg}
            </Paragraph>
          ) : statusMsg.error ? (
            <Paragraph
              style={{
                textAlign: "start",
                marginTop: "1rem",
                color: "var(--red)",
              }}
            >
              {statusMsg.error}
            </Paragraph>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
