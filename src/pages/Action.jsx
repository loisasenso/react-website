import React from "react";
import Resume from "../assets/Resume.pdf";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';

const Calltoaction = () => {
    return (
        <div>
            <a href={Resume} download className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-primary">Connect with me!</a>
        </div>
    )
}


export default Calltoaction;