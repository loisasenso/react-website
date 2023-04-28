import React from "react";
import { Link, Outlet } from "react-router-dom";

//Imports Styling for Footer//
import "./Footer.css";

//Import React Icons for Socials//
import {BsLinkedin} from "react-icons/Bs";
import {BsInstagram} from "react-icons/Bs";
import {BsTwitter} from "react-icons/Bs";
import {BsWhatsapp} from "react-icons/Bs";
import {AiOutlineMail} from "react-icons/Ai";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <a className="footer_logo" href="#">LA</a>
        <ul className="pagelinks">
          <li><a href="#">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
        <div className="socials">
          <a href="https://linkedin.com/in/loisasensogyambibi" target="_blank"><BsLinkedin/></a>
          <a href="https://api.whatsapp.com/send?phone=+18638388631" target="_blank"><BsWhatsapp/></a>
          <a href="https://www.instagram.com/" target="_blank"><BsInstagram/></a>
          <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
          <a href="mailto:lasensogyambibi@gmail.com" target="_blank"><AiOutlineMail/></a>

        </div> 
      </footer>
    </div>
  );
}

export default Footer;
