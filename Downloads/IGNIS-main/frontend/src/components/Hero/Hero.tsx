import React from 'react';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero home-snap-section">
            <div className="hero-container">
                <div className="hero-left">
                    <HeroContent />
                    <HeroActions />
                </div>
                <div className="hero-right">
                    <div className="story-carousel auto-swipe-carousel">
                        <div className="carousel-slide swipe-card card-1">
                            <div className="placeholder-image bg-red">
                                <div className="placeholder-text">Image Placeholder 1</div>
                            </div>
                        </div>
                        <div className="carousel-slide swipe-card card-2">
                            <div className="placeholder-image bg-gray">
                                <div className="placeholder-text">Image Placeholder 2</div>
                            </div>
                        </div>
                        <div className="carousel-slide swipe-card card-3">
                            <div className="placeholder-image bg-dark">
                                <div className="placeholder-text">Image Placeholder 3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
