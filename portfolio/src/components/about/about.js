import React from 'react';
import './about.css';
import ProfileImage from '../../assets/image.png';

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="about__title">About Me</h2>
            <div className="about__content">
                <img src={ProfileImage} alt="Shilpa" className="about__image" />
                <div className="about__text">
                    <p>
                        I never imagined I'd be writing code. Coming from a commerce background,  
                        tech seemed like a distant world. But one day, a simple WhatsApp status from  
                        my math teacher changed everything. It sparked a curiosity that led me to an  
                        IT institute, where I took my first steps into programming.
                    </p>
                    <p>
                        Initially, everything felt overwhelming—syntax, logic, debugging. But with persistence,  
                        I built my first projects, contributed to real-world applications, and realized that coding  
                        is more than just writing lines—it's about solving problems and creating meaningful experiences.
                    </p>
                    <p>
                        Today, I specialize in full-stack development, focusing on MERN (MongoDB, Express, React, Node.js)  
                        and TypeScript with Next.js. I love crafting scalable, efficient, and user-friendly applications,  
                        ensuring seamless integration between frontend and backend. Whether it's optimizing APIs, enhancing  
                        UI/UX, or managing databases, I thrive on building impactful digital solutions.
                    </p>
                    <p>
                        I have worked on multiple freelance projects, contributed to open-source, and am now  
                        preparing to participate in Google Summer of Code (GSoC). My goal is to collaborate with  
                        organizations, contribute to impactful projects, and continue growing as a developer.
                    </p>
                    <p>
                        From starting with zero coding knowledge to working on complex projects and open-source collaborations,  
                        my journey has been incredible. And this is just the beginning!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
