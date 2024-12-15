import React from "react";
import "./contact.css";
import InstagramIcon from "../../assets/instagram.png";
import YouTubeIcon from "../../assets/youtube.png";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="contact">
        <div className="contact-header">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss.
          </span>
        </div>
        <form className="contactForm">
          <input type="text" classname="name" placeholder="Your name" />
          <input type="email" classname="email" placeholder="Your email" />
          <textarea className="msg" name="message" rows="5">
            What would you like to say...
          </textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={InstagramIcon} alt="Instagram" className="link" />
            <img src={YouTubeIcon} alt="Youtube" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
