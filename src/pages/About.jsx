import React from "react";
import {FaHistory} from "react-icons/fa";
import {IoMdSchool} from "react-icons/io";
import {GiSkills} from "react-icons/gi";
import {RiMovieFill} from "react-icons/ri";
import "./About.css";


const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        <div className="about_content">
          <div className="about_tabs">
            <article className="about_tab">
              <h3>Background</h3>
              <FaHistory className="about_tab_icon"/>
              <div>Lots of fun things about me</div>
            </article>
            <article className="about_tab">
              <h3>Education</h3>
              <IoMdSchool className="about_tab_icon"/>
              <div>School is really fun</div>
            </article>
            <article className="about_tab">
              <h3>Skills</h3>
              <GiSkills className="about_tab_icon"/>
              <div>I have loads of skills</div>
            </article>
            <article className="about_tab">
              <h3>Hobbies</h3>
              <RiMovieFill className="about_tab_icon"/>
              <div>Tbh, I don't have any</div>
            </article>
          </div>
      
        </div>

      </div>
    </div>
      
    
  )
};

export default About;
