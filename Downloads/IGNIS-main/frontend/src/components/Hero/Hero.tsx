import React from 'react';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <HeroContent />
                    <HeroActions />
                </div>
                <div className="hero-right">
                    {/* Image removed for now */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
