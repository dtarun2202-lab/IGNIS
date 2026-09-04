import React from 'react';
import './SchoolsCareerSection.css';
import careerImage from '../../assets/images/ignis carrer awarness program.jpg';

const SchoolsCareerSection = () => {
    return (
        <section id="career" className="career-section">
            <div className="career-header">
                <h2 className="career-title">Ignis Career Awareness Program</h2>
                <div className="career-divider">
                    <div className="career-line"></div>
                    <div className="career-diamond">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3d2a23" stroke="none"><path d="M12 2l3.09 6.91L22 12l-6.91 3.09L12 22l-3.09-6.91L2 12l6.91-3.09L12 2z"/></svg>
                    </div>
                    <div className="career-line"></div>
                </div>
            </div>

            <div className="career-content">
                <div className="career-image-wrapper">
                    <img src={careerImage} alt="Students with Career Awareness Posters" className="career-image" />
                </div>
                <div className="career-text">
                    <p>
                        The career awareness program is part of our commitment towards a holistic approach to education. Students from vulnerable communities, mostly first-generation learners, are often at a loss about the career choices available, and the steps required to achieve their career goals. Ignis offers a range of customised programs ranging from a one-day introductory engagement to a comprehensive month-long program that focuses on guiding the beneficiaries through a path of self-discovery of their interests, talents, and their intellectual and emotional quotients to narrow down their career options. The program also guides them on seeking and availing scholarships and other government aids. The more comprehensive engagement also involves a parent counselling session to help parents understand their child's interests and achievements and provide them with the right encouragement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SchoolsCareerSection;
