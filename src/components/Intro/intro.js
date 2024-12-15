import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"></span>
        <span className="introText"></span>
        <span className="introName">Maya Michaeli</span>
        {/* <br>Computer Science Student</br> */}
        <p className="IntroPara">Computer Science Student</p>
        <Link
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        ></Link>
        <button className="btn">Who am I?</button>
      </div>
      <img src={bg} className="bg" alt="Profile" />
    </section>
  );
};

export default Intro;
