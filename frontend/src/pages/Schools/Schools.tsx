import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Schools.css';

const Schools = () => {
    return (
        <div className="schools-page">
            <Navbar />
            <section className="schools-hero">
                <div className="schools-hero-left">
                    <div className="schools-subtitle-wrapper">
                        <span className="schools-subtitle">FOR SCHOOLS</span>
                        <div className="schools-subtitle-line"></div>
                    </div>
                    <h1 className="schools-main-title">
                        Building Stronger<br/>
                        Learning Environments<br/>
                        for <span className="schools-red-text">Every Child.</span>
                    </h1>
                    <p className="schools-description">
                        Our school initiatives equip students and educators with the<br/>
                        skills, resources and opportunities they need to learn,<br/>
                        grow and thrive.
                    </p>
                </div>
            </section>
            
            {/* Additional content will go here */}
            
            <div className="schools-content">
                {/* Spacer for now */}
            </div>

            <Footer />
        </div>
    );
};

export default Schools;
