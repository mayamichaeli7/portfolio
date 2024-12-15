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
        iushdfpiuahsdifja;ksjdvnlaiurfhjkahf;ukhsa
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Skills</h2>
            <p>this is a demo text u can write ur own shit here </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>My Education</h2>
            <p>sdjkfas;dfjap;fnekjnarfjn</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Personal Life</h2>
            <p>askdjfnaejfn;awrnfl</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
