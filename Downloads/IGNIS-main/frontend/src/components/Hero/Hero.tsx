import React from 'react';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import './Hero.css';
import slide1 from '../../assets/images/hero-slide-1.png';
import slide2 from '../../assets/images/hero-slide-2.png';
import slide3 from '../../assets/images/hero-slide-4.png';

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
                            <img src={slide1} alt="Impact statistic" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="carousel-slide swipe-card card-2">
                            <img src={slide2} alt="Classroom learning" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                        <div className="carousel-slide swipe-card card-3">
                            <img src={slide3} alt="Community program" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
