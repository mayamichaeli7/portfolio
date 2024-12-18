import React, { useRef, useState } from "react";
import "./contact.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8sc5aim", "template_zigmurc", form.current, {
        publicKey: "daE9oxUia59XvP6iA",
      })
      .then(
        () => {
          e.target.reset();

          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <section className="contactPage">
      <div id="contact">
        <div className="contact-header">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss.
          </span>
        </div>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name={"name"}
            onChange={handleInputChange}
            value={formData.name}
            required
            onInvalid={(event) => event.target.setCustomValidity("OOOpssss")}
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name={"email"}
            onChange={handleInputChange}
            value={formData.email}
            required
            onInvalid={(event) => event.target.setCustomValidity("OOOpssss")}
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="What would you like to say..."
            required
            onInvalid={(event) => event.target.setCustomValidity("OOOpssss")}
          />

          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
