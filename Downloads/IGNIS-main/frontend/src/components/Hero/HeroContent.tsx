import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HeroContent = () => {
    return (
        <div className="hero-content-wrapper">
            <div className="hero-subtitle-wrapper">
                <span className="hero-subtitle">OUR PURPOSE</span>
                <div className="hero-subtitle-line"></div>
            </div>
            
            <h1 className="hero-title">
                <span className="hero-title-black">IGNITING</span><br />
                <span className="hero-title-black">POTENTIAL.</span><br />
                <span className="hero-title-red">TRANSFORMING</span><br />
                <span className="hero-title-red">FUTURES.</span>
            </h1>

            <p className="hero-description">
                Ignis Careers provides English language, life skills, and teacher
                training to underserved low-cost schools across India,
                empowering children for a brighter future.
            </p>

            <div className="hero-links">
                <Link to="/story" className="hero-link">OUR STORY <span className="arrow">&rarr;</span></Link>
                <div className="hero-link-separator"></div>
                <Link to="/impact" className="hero-link hero-link-black">OUR IMPACT <span className="arrow">&rarr;</span></Link>
            </div>
        </div>
    );
};

export default HeroContent;
