import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      <span className="skillDesc">
        I am a passionate computer science student with a lifelong dedication to
        learning and growth, both academically and personally.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Skills</h2>
            <p>
              I have developed a strong foundation in programming, algorithms,
              and software development. My skills include proficiency in
              languages such as Python, Java, and JavaScript, as well as
              experience with web development, database management, and version
              control systems like Git. I am passionate about problem-solving,
              and I continuously strive to enhance my technical knowledge
              through hands-on projects, collaborative teamwork, and staying
              updated with emerging technologies.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>My Education</h2>
            <p>
              I graduated with honors from Alpharetta High School, showcasing a
              strong commitment to academic excellence. Currently, I am a
              student at Kennesaw State University, where I am proud to be
              listed on the President's List for outstanding academic
              achievement. Additionally, I have completed a fullstack
              development course with Methodian, gaining valuable skills in
              modern web technologies and software development practices.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Personal Life</h2>
            <p>
              Outside of my academic and professional pursuits, I have been
              riding and competing in horseback riding my entire life,
              specializing in English riding. This passion has taught me
              discipline, perseverance, and a deep connection with animals. I
              currently reside in Tel Aviv, where I continue to embrace new
              experiences and cultural opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
