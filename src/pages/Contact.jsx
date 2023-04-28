import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

//Imports Contact Form Styling //
import "./Contact.css"

//Imports useRef hook for form submission implementation //
import { useRef } from 'react';

// Imports Emailjs for sending message directly to email inbox //
import emailjs from 'emailjs-com';


// Implements functionality & renders html on contact page //

// Const Function enables email to be sent directly to inbox using created. Email js provides the code for this functionality//
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d43wp2a', 'template_efecvb8', form.current, 'hDdMnpMh2wXycrI8-')
        e.target.reset()
        
    };
    return (
        <article className="contact">
            <h5>Let's chat!</h5>
            
            <div className="contact_container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="message" rows="10" placeholder="Message" required></textarea>
                    <button type="submit" className="btn btn-primary btn-lg">Send</button>
                </form>
            </div>
        </article>

    )
}

export default Contact;