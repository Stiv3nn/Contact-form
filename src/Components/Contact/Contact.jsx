import React, { useState } from 'react'
import './Contact.css'
// IMPORTO SWEETALERT2
import Swal from 'sweetalert2'

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "27cfba5a-48bb-40e7-88c0-ad4c248fa845");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await res.json();

            if (data.success) {
                // console.log("Success", data);
                // setSuccess(true);
                // event.target.reset();

                Swal.fire({
                    title: "Success!!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            } else {
                console.log("Submission error", data);
                setSuccess(false);
            }
        } catch (error) {
            console.error("Fetch error", error);
            setSuccess(false);
        }
    }

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                {/* TITOLO */}
                <h2>Contact Form</h2>

                {/* BOX DEL NOME */}
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' required />
                </div>

                {/* BOX DELL'EMAIL */}
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' name='email' required />
                </div>

                {/* BOX DEL MESSAGGIO */}
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
                </div>

                {/* PULSANTE INVIO FORM */}
                <button type='submit'>Send Message</button>

                {success && <p className="success">Message sent successfully!</p>}
            </form>
        </section>
    )
}

export default Contact