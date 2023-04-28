import React from "react";

// Calltoaction function from Action.jsx File //
import Calltoaction from "./Action";

// Imports Profile Picture from Assets //
import Profile from "../assets/Profile.png";

// Imports Home Page Styling //
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <h1 className="tagline">Front End Development. Writing. Risk Management & Lots of Math.</h1>
        <div className="home_content">
          <section className="home_text">
            Hi! I am so glad you're here! Here's a little bit about me:
            My name is Lois Asenso-Gyambibi. I'm an undergraduate student at Southeastern University majoring in Mathematics, Actuarial Science Conentration with a minor in Business and Web Development. That is code for all I do is Math and coding, well mostly. When I'm not coding (or mathing), I enjoy creative writing. Feel free to explore my page.
            <Calltoaction></Calltoaction>
          </section>
          <section className="home_profile_pic">
            <img src={Profile} alt="me" />
          </section>
        </div>
        
    </div>
    
  ) 
}

export default Home;