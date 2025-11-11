import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact'>
            <form>
                {/* TITOLO */}
                <h2>Contact Form</h2>

                {/* BOX DEL NOME */}
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your name' required />
                </div>

                {/* BOX DELL'EMAIL */}
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' required />
                </div>

                {/* BOX DEL MESSAGGIO */}
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="" id="" className='field mess' placeholder='Enter your message' required></textarea>
                </div>

                {/* PULSANTE INVIO FORM */}
                <button type='submit'>Send Message</button>
            </form>
        </section>
    )
}

export default Contact