import styles from "./css/ContactForm.css";
import React from "react";
import {useState} from "react";

const ContactForm = () => {
    const [feedback, setFeedback] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "3925c134-3dc6-4ff2-9d39-6ac0475d907a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setFeedback("Submitting your info..");

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            setFeedback("Message Sent.");
        } else {
            setFeedback("Error, verify info and try again.");
        }
    }


    return (
        <div id="ask" className="about-card">
            <h2>Ask a question</h2>
            <form id="ask-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input placeholder="type your name here" type="text" name="name" id="name" autoComplete="name" required/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input placeholder="type your email here" type="email" name="email" id="email" autoComplete="email" required/>
                </div>
            
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" autoComplete="message" required></textarea>
                </div>


                <p><button className="action-button" type="submit">Submit</button></p>
            </form>
            <h3 id="form-result">{feedback}</h3>
        </div>
    );
};

export default ContactForm;