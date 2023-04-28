import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

// Imports Home Page Styling //
import "./Home.css";

//Imports Resume File from Assets //
import Resume from "../assets/Resume.pdf";



// Implements Functionality of Call to Action Buttons //
const Calltoaction = () => {
    return (
        <div className="call_action_buttons">
            <a href={Resume} download className="btn btn-primary">Download CV</a>
            <a href="/portfolio" className="btn btn-primary">Connect with me!</a>
        </div>
    )
}


export default Calltoaction;