import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I contribute to open-source projects and develop scalable web applications with a strong focus on UI and backend development.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WebiU 2.0</h2>
                        <p>
                            Contributed to the UI of <a href="https://github.com/shilpa053020/Webiu/tree/feature/webiu-2024" target="_blank" rel="noopener noreferrer">WebiU 2.0</a>, a platform designed for C2SI and SCoRe Lab, showcasing detailed project insights.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>Course-Selling Platform</h2>
                        <p>
                            Developed the backend for a course-selling application with authentication, payments, and efficient API design.  
                            Check out the project on <a href="https://github.com/shilpa053020/Freshkite_Project" target="_blank" rel="noopener noreferrer">GitHub</a>.
                        </p>

                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Moi App</h2>
                        <p>
                            Built <a href="https://github.com/shilpa053020/moi_App" target="_blank" rel="noopener noreferrer">Moi App</a>, a cash gift tracking system that generates reports in Excel, streamlining financial management.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Angular CRUD Project</h2>
                        <p>
                            Developed an <a href="https://github.com/shilpa053020/Angular-CRUD" target="_blank" rel="noopener noreferrer">Angular-based CRUD app</a> to manage student records, allowing users to create, update, and delete student data efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
