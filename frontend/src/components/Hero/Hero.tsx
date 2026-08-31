import React, { useState, useEffect } from 'react';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import './Hero.css';
import slide1 from '../../assets/images/hero-1.png';
import slide2 from '../../assets/images/hero-2.png';
import slide3 from '../../assets/images/hero-3.png';
import slide4 from '../../assets/images/hero-4.png';
import slide5 from '../../assets/images/hero-5.png';

const slides = [slide1, slide2, slide3, slide4, slide5];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-swipe every 5 seconds, resetting on manual swipe
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="hero home-snap-section">
            <div className="hero-container">
                <div className="hero-left">
                    <HeroContent />
                    <HeroActions />
                </div>
                <div className="hero-right">
                    <div className="story-carousel auto-swipe-carousel">
                        {slides.map((slide, index) => {
                            let position = 'nextSlide';
                            if (index === currentIndex) {
                                position = 'activeSlide';
                            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                                position = 'prevSlide';
                            }

                            return (
                                <div className={`carousel-slide ${position}`} key={index}>
                                    <img src={slide} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                                </div>
                            );
                        })}
                        <button className="carousel-btn prev-btn" onClick={prevSlide}>&lt;</button>
                        <button className="carousel-btn next-btn" onClick={nextSlide}>&gt;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
