import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pg0u5wa', 'template_cfzyl8l', form.current, 'Zzu6-7hLq1q1t7jDJ')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                    <button type="submit" className='submitBtn'>Submit</button>
                </form>
                <div className="links">
                    <a href="https://www.linkedin.com/in/shilpa05/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                    </a>
                    <a href="https://github.com/shilpa053020" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="link" />
                    </a>
                    <a href="https://x.com/shilpa053020" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" className="link" />
                    </a>
                    <a href="https://www.youtube.com/@codingvlog746" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
