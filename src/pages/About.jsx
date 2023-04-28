import React from "react";


//Imports React Icons //
import {FaHistory} from "react-icons/fa";
import {IoMdSchool} from "react-icons/io";
import {GiSkills} from "react-icons/gi";
import {RiMovieFill} from "react-icons/ri";

// Imports About Page Styling //
import "./About.css";


// Renders About Page HTML //
const About = () => {
  return (
    <div>
      <div>
        <div className="about_content">
          <div className="about_tabs">
            <article className="about_tab">
              <h3>Background</h3>
              <FaHistory className="about_tab_icon"/>
              <div className="about_tab_text">I spent 18 years of my life in a West African country- Ghana. For a long time that was all I knew until I moved to the United States two and a half years ago for college. It was an uncomfortable change but one I will always be grateful for. Math is not the obvious choice for a lot of people when deciding their college majors. It's not just the numbers that intrigue me. It's really the intersection between Math and Business I found particularly interesting which is why I chose to study Actuarial Science. </div>
            </article>
            <article className="about_tab">
              <h3>Education</h3>
              <IoMdSchool className="about_tab_icon"/>
              <div className="about_tab_text">I am currently an undergraduate student at Southeastern University in Lakeland, Florida earning my Bachelors in Mathematics (Actuarial Science Concentration) with a Minor in Business. The goal is work as an Actuary in both insurance and consulting. Outside coursework, I have had the chance to network with actuaries from Travelers, Aetna/CVS, Liberty Mutual and Thrivent Financial.</div>
            </article>
            <article className="about_tab">
              <h3>Skills</h3>
              <GiSkills className="about_tab_icon"/>
              <div className="about_tab_text">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Microsoft Excel</li>
                  <li>Python</li>
                </ul>
              </div>
            </article>
            <article className="about_tab">
              <h3>Hobbies</h3>
              <RiMovieFill className="about_tab_icon"/>
              <div className="about_tab_text">Every month or two, I decide on a new hobby so the entire list could not fit on here if I tried but recently I've been learning to play chess - which is not as hard as it looks. I like to read occassionally and when I'm not doing that reality shows are my comfort shows.</div>
            </article>
          </div>
      
        </div>

      </div>
    </div>
      
    
  )
};

export default About;
