import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.jpg";
import Portfolio2 from "../../assets/portfolio-2.jpg";
import Portfolio3 from "../../assets/portfolio-3.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I have developed a variety of projects that showcase my skills in
        full-stack development. One of my notable creations is a Tic Tac Toe
        game that requires user login functionality, built using Mongoose for
        database management. I also created a horse selling website that allows
        users to browse and purchase horses, demonstrating my ability to
        integrate e-commerce features. Additionally, I built a Snake game as a
        fun and interactive way to practice my JavaScript and game development
        skills. These projects reflect my passion for coding and
        problem-solving, with a focus on both functionality and user experience.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
      </div>
    </section>
  );
};

export default Works;
